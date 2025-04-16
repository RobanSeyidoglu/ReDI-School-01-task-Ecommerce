export default function Loading() {
  return (
    <div className="flex flex-col items-center p-5 backdrop-blur-md shadow-lg shadow-blue-400 rounded-lg">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-blue-600 font-semibold">Loading...</p>
    </div>
  );
}
