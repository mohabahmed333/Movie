const GridCardSkelton = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 animate-pulse">
      <div className="relative h-[400px] bg-gray-300">
        <div className="w-full h-full bg-gray-300"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
          <div className="flex items-center mt-2">
            <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
            <div className="ml-2 w-8 h-5 bg-gray-400 rounded"></div>
            <div className="ml-2 w-16 h-5 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="w-1/2 h-4 bg-gray-400 rounded mb-2"></div>
        <div className="w-full h-12 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default GridCardSkelton;
