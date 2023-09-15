export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-3 grid-rows-6 h-full">
        <div className="col-span-3 bg-slate-600">1</div>
        <div className="col-span-3 row-span-3 col-start-1 row-start-4 bg-red-600">
          2
        </div>
        <div className="row-span-2 col-start-1 row-start-2 bg-lime-700">6</div>
        <div className="col-span-2 row-span-2 col-start-2 row-start-2 bg-blue-400">
          7
        </div>
      </div>
    </div>
  );
}
