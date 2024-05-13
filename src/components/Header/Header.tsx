import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="border-b-2 border-black">
      <div className="container mx-auto flex p-6">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
