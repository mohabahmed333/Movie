import { Star } from "lucide-react";

const Vote = ({
  vote_average,
  vote_count,
}: {
  vote_average: number;
  vote_count: number;
}) => {
  return (
    <div className="flex items-center mt-2">
      <Star className="w-4 h-4 text-yellow-400 fill-current" />
      <span className="ml-1 text-white">{vote_average.toFixed(1)}</span>
      <span className="ml-2 text-gray-300">
        ({vote_count.toLocaleString()} votes)
      </span>
    </div>
  );
};

export default Vote;
``