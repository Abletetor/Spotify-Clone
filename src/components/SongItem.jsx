/* eslint-disable react/prop-types */

import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ image, desc, name, id }) => {
   const { playWithId } = useContext(PlayerContext);

   const handleClick = () => {
      playWithId(id);
   };
   return (
      <div onClick={ handleClick } className="min-w-[180px] py-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
         <img src={ image } alt="" className="rounded" />
         <p className="font-bold mt-2 mb-1">{ name }</p>
         <p className="text-slate-200 text-sm">{ desc }</p>
      </div>
   );
};

export default SongItem;
