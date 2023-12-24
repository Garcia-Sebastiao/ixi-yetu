export function Step({ number, step, final }) {
  return (
    <div className="flex items-center">
      <div className="w-7 h-7 rounded-full bg-white">{number}</div>
      {!final && <div className="w-7 h-7 rounded-full bg-[#00FA9C25]" />}
    </div>
  );
}
