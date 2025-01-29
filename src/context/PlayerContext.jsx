/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
   const audioRef = useRef();
   const seekBg = useRef();
   const seekBar = useRef();

   const [track, setTrack] = useState(songsData[1]);
   const [playStatus, setPlayStatus] = useState(false);
   const [time, setTime] = useState({
      currentTime: {
         second: 0,
         minute: 0,
      },
      totalTime: {
         second: 0,
         minute: 0,
      }
   });

   //Play and pause function
   const play = () => {
      audioRef.current.play();
      setPlayStatus(true);
   };

   const pause = () => {
      audioRef.current.pause();
      setPlayStatus(false);
   };

   //Play Song with Id
   const playWithId = async (id) => {
      await setTrack(songsData[id]);
      await audioRef.current.play();
      setPlayStatus(true);
   };
   // Play previous And next Song
   const previous = async () => {
      if (track.id > 0) {
         await setTrack(songsData[track.id - 1]);
         await audioRef.current.play();
         setPlayStatus(true);
      }
   };
   const next = async () => {
      if (track.id < songsData.length - 1) {
         await setTrack(songsData[track.id + 1]);
         await audioRef.current.play();
         setPlayStatus(true);
      }
   };

   //Seek Song
   const seekSong = (e) => {
      audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
   };

   // Music stream timeline
   useEffect(() => {
      const updateTime = () => {
         if (audioRef.current && !isNaN(audioRef.current.duration)) {
            setTime(prev => ({
               ...prev,
               totalTime: {
                  second: Math.floor(audioRef.current.duration % 60),
                  minute: Math.floor(audioRef.current.duration / 60),
               }
            }));
         }
      };

      if (audioRef.current) {
         audioRef.current.ontimeupdate = () => {
            seekBar.current.style.width =
               (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";

            setTime({
               currentTime: {
                  second: Math.floor(audioRef.current.currentTime % 60),
                  minute: Math.floor(audioRef.current.currentTime / 60),
               },
               totalTime: {
                  second: Math.floor(audioRef.current.duration % 60) || 0,
                  minute: Math.floor(audioRef.current.duration / 60) || 0,
               }
            });
         };

         // Update total time when the new track is loaded
         audioRef.current.onloadedmetadata = updateTime;
      }
   }, [track]);


   //context values
   const contextValue = {
      audioRef,
      seekBg, seekBar,
      track, setTrack,
      time, setTime,
      playStatus, setPlayStatus,
      play, pause,
      playWithId,
      previous, next,
      seekSong,
   };

   return (
      <PlayerContext.Provider value={ contextValue }>
         { props.children }
      </PlayerContext.Provider>
   );
};

export default PlayerContextProvider;