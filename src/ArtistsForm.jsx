import React from "react";

export default function ArtistForm({
  artist,
  setArtist,
  generateArtist,
  clearArtists,
}) {
  const handleChange = (e) => {
    setArtist(e.target.value);
    clearArtists(); //Clear artists list whenever the input changes ->
  };

  return (
    <form onSubmit={generateArtist}>
      <input
        type="text"
        value={artist}
        onChange={handleChange}
        placeholder="Enter an artist"
      />
      <button type="submit">Search similar artists</button>
    </form>
  );
}
