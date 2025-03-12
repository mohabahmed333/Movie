const CarouselItemSkelton = () => {
  return (
<div
  className="movie-slide mx-1 rounded-xl relative bg-gray-200 
  overflow-hidden group hover:shadow-xl transition-all duration-300
   transform hover:-translate-y-2 cursor-pointer animate-pulse"
  style={{ aspectRatio: '2/3' }}  
>
   <div className="w-full h-full bg-gray-300"></div>

   <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300"></div>

  {/* Placeholder for Movie Title & Info */}
  <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end text-white transform translate-y-4 group-hover:translate-y-0">
    <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-400 rounded w-1/2"></div>
  </div>
</div>


  );
};

export default CarouselItemSkelton;
