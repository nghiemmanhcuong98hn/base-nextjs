export default function Skeleton() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="animate-pulse rounded bg-gray-100 p-3">
          <div className="mb-2 h-4 w-1/2 rounded bg-gray-300"></div>
          <div className="h-3 w-full rounded bg-gray-200"></div>
        </div>
      ))}
    </div>
  );
}
