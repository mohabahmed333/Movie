 
const CategoryItemSkelton  = () => {
  return (
<div
  className="group relative h-[400px] bg-gray-200 border rounded-lg mx-2 shadow-sm
     hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col animate-pulse"
>
  {/* Image Skeleton */}
  <div className="relative h-[80%] bg-gray-300 w-full"></div>

  {/* Bottom Section */}
  <div className="p-4 flex flex-col space-y-3">
    {/* Title Skeleton */}
    <div className="h-6 bg-gray-300 rounded w-3/4"></div>

    {/* Vote Skeleton */}
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>

    {/* Favorite Icon Placeholder */}
    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
  </div>
</div>

  );
};

export default CategoryItemSkelton;
