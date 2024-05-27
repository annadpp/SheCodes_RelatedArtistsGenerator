import { FaMagnifyingGlass } from "react-icons/fa6";

export default function ArtistForm({
  artist,
  setArtist,
  generateArtist,
  clearArtists,
}) {
  const handleChange = (e) => {
    setArtist(e.target.value.toUpperCase());
    clearArtists(); //Clear artists list whenever the input changes -> from Generator
  };

  return (
    <form
      onSubmit={generateArtist}
      className="flex items-center w-full text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
    >
      <input
        type="text"
        value={artist}
        onChange={handleChange}
        placeholder="Enter artist to run the..."
        className="w-11/12"
      />
      <button
        type="submit"
        className="w-1/12 bg-black h-full flex justify-center items-center"
      >
        <FaMagnifyingGlass className="text-white text-xl lg:text-2xl" />
      </button>
    </form>
  );
}
