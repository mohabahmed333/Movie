const MovieDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Skeleton */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="w-full h-full bg-gray-300 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="h-6 w-40 bg-gray-400 animate-pulse rounded mb-4"></div>
            <div className="h-10 w-60 bg-gray-400 animate-pulse rounded mb-2"></div>
            <div className="flex items-center space-x-6">
              <div className="h-6 w-20 bg-gray-400 animate-pulse rounded"></div>
              <div className="h-6 w-20 bg-gray-400 animate-pulse rounded"></div>
              <div className="h-6 w-20 bg-gray-400 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg p-6">
          <div className="h-8 w-40 bg-gray-400 animate-pulse rounded mb-4"></div>
          <div className="h-20 w-full bg-gray-300 animate-pulse rounded mb-6"></div>

          {/* Poster Skeleton */}
          <div>
            <div className="h-6 w-24 bg-gray-400 animate-pulse rounded mb-2"></div>
            <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded-lg shadow-lg"></div>
          </div>

          {/* Details Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div>
              <div className="h-6 w-32 bg-gray-400 animate-pulse rounded mb-2"></div>
              <dl className="space-y-2">
                <div className="flex">
                  <dt className="w-32 h-5 bg-gray-300 animate-pulse rounded"></dt>
                  <dd className="h-5 w-40 bg-gray-300 animate-pulse rounded ml-2"></dd>
                </div>
                <div className="flex">
                  <dt className="w-32 h-5 bg-gray-300 animate-pulse rounded"></dt>
                  <dd className="h-5 w-20 bg-gray-300 animate-pulse rounded ml-2"></dd>
                </div>
                <div className="flex">
                  <dt className="w-32 h-5 bg-gray-300 animate-pulse rounded"></dt>
                  <dd className="h-5 w-10 bg-gray-300 animate-pulse rounded ml-2"></dd>
                </div>
                <div className="flex">
                  <dt className="w-32 h-5 bg-gray-300 animate-pulse rounded"></dt>
                  <dd className="h-5 w-24 bg-gray-300 animate-pulse rounded ml-2"></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetailsSkeleton;
