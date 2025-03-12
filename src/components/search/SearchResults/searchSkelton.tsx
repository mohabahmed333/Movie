const SearchSkeleton = () => (
  <div className="animate-pulse flex p-4 bg-white rounded-lg">
    <div className="h-24 w-24 bg-gray-200 rounded-lg"></div>
    <div className="ml-4 flex-1">
      <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
      <div className="h-3 w-1/2 bg-gray-200 rounded mb-2"></div>
      <div className="h-3 w-1/4 bg-gray-200 rounded"></div>
    </div>
  </div>
);

export default SearchSkeleton;
