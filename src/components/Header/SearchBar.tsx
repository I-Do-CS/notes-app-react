const SearchBar = () => {
  return (
    <div className="mx-auto">
      <input
        className=" rounded border-2 border-black px-3 py-1"
        aria-roledescription="Searchbar input field"
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
