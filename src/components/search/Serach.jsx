const Serach = ({ serach, setSearch, handleSearch }) => {
  return (
    <div className="w-full flex justify-around mt-2.5 mb-[30px]">
      <input
        type="text"
        placeholder="Enter City Name"
        name="Search"
        className="w-2/3 h-[45px] border rounded p-2 text-2xl outline-none bg-white  text-gray-600"
        value={serach}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="border-none bg-black text-white rounded p-2 text-2xl outline-none cursor-pointer hover:bg-zinc-800 active:bg-zinc-950"
        onClick={handleSearch}
      >
        Search City
      </button>
    </div>
  );
};

export default Serach;
