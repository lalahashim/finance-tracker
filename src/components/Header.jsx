export default function Header({ onAddClick }) {
  return (
    <div className="flex items-center justify-between pt-5 mb-2 sm:mb-10 mx-auto w-[90%]">
      <div className="flex items-center gap-1">
        <img src="/coin.png" alt="logo" className="w-8 sm:w-12" />
        <h1 className="font-logo text-4xl sm:text-5xl text-indigo-950">Finance tracker</h1>
      </div>
      <button
        onClick={onAddClick}
        className="cursor-pointer font-main text-xl sm:text-2xl text-gray-50 bg-indigo-950 border-2 py-1.5 px-3 rounded-2xl hover:bg-gray-50 hover:text-indigo-950"
      >
        Add
      </button>
    </div>
  );
}
