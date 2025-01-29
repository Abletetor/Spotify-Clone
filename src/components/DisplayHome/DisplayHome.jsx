import Navbar from "../Navbar/Navbar";
import { albumsData, songsData } from "../../assets/assets";
import AlbumItem from "../AlbumItem";
import SongItem from "../SongItem";
const DisplayHome = () => {
   return (
      <>
         <Navbar />
         <div className="mb-4">
            <h1 className="my-5 font-bold text-2x1">Featured Charts</h1>
            <div className="flex overflow-auto">
               { albumsData.map((item, index) => (
                  <AlbumItem key={ index } name={ item.name } desc={ item.desc } image={ item.image } id={ item.id } />
               )) }
            </div>
         </div>
         <div className="mb-4">
            <h1 className="my-5 font-bold text-2x1">Today&lsquo;s biggest hits</h1>
            <div className="flex overflow-auto">
               { songsData.map((song, index) => (
                  <SongItem key={ index } name={ song.name } desc={ song.desc } image={ song.image } id={ song.id } />
               )) }
            </div>
         </div>
      </>
   );
};

export default DisplayHome;
