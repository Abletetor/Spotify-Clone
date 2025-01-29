/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, desc, name, id }) => {
   const navigate = useNavigate();

   //handle album/song click
   const handleClick = () => {
      navigate(`/album/${id}`);
   };
   return (
      <div onClick={ handleClick } className="min-w-[180px] py-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
         <img src={ image } alt="" className="rounded" />
         <p className="font-bold mt-2 mb-1">{ name }</p>
         <p className="text-slate-200 text-sm">{ desc }</p>
      </div>
   );
};

export default AlbumItem;
