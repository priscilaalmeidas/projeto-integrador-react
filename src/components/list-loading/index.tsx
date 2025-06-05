import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ListLoading() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="max-w-[300px]  flex-wrap p-4 items-center text-center bg-white border border-gray-200 rounded-lg shadow-md"
        >
          <Skeleton height={30} width={200} className="mb-2" />
          <Skeleton height={150} width={250} className="mb-4 rounded-lg" />
          <Skeleton height={20} width={150} className="mb-4" />
          <Skeleton height={20} width={150} className="mb-4" />
        </div>
      ))}
    </div>
  );
}
