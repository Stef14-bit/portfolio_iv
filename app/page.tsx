export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-6 h-screen">
      <div className="col-span-3 bg-red-600 ">1</div>
      <div className="col-span-3 row-span-3 row-start-2 bg-lime-700">2</div>
      <div className="row-span-2 row-start-5 bg-amber-400">6</div>
      <div className="col-span-2 row-span-2 row-start-5 bg-emerald-600">7</div>
    </div>
  );
}
