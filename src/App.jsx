import { useContext } from "react";
import Display from "./components/Display/Display";
import Player from "./components/Player/Player";
import Sidebar from "./components/Sidebar/Sidebar";
import { PlayerContext } from "./context/PlayerContext";


function App () {
   const { audioRef, track } = useContext(PlayerContext);

   return (
      <div className="h-screen bg-black">
         <div className="h-[90%] flex">
            <Sidebar />
            <Display />
         </div>
         <Player />
         <audio preload="auto" ref={ audioRef } src={ track.file }></audio>
      </div>
   );
}

export default App;
