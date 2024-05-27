import { useState, useEffect } from "react";
import axios from "axios";
import ArtistsForm from "./ArtistsForm";
import ArtistsList from "./ArtistsList";

export default function Generator() {
  const [similarArtists, setSimilarArtists] = useState({
    ready: false,
    data: [],
  });
  const [artist, setArtist] = useState("");
  const [loading, setLoading] = useState(false);

  function handleResponse(response) {
    let dataResponse;
    try {
      dataResponse = JSON.parse(response.data.answer);
    } catch (e) {
      console.error("Failed to parse response data:", e);
      dataResponse = [];
    }

    if (Array.isArray(dataResponse)) {
      setSimilarArtists({ ready: true, data: dataResponse });
    } else {
      setSimilarArtists({ ready: true, data: null });
    }

    setLoading(false);
  }

  function generateArtist(e) {
    e.preventDefault();
    setLoading(true);

    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let context = `You are a music expert and know many bands. Your mission is to generate a dictionary with the format [{"band": "", "style": ""}] using double quotes as per the user instructions. Please provide the information inside a dictionary as requested, without any additional instructions.`;
    let prompt = `User instructions: Give me 6 bands similar to ${artist} following the context. Don't include the band I pass in your list.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function clearArtists() {
    setSimilarArtists({
      ready: false,
      data: [],
    });
  }

  //Used to clear the list if the artist input changes
  useEffect(() => {
    clearArtists();
  }, [artist]);

  return (
    <div className="generator container mx-auto h-[90vh] flex flex-col items-center justify-center ">
      <div className="w-full sm:w-10/12 xl:w-5/6 h-2/6 bg-lime-green flex flex-col justify-center p-6 lg:p-20 2xl:p-36">
        <p className="text-sm xl:text-md mb-7">If you like...</p>
        <ArtistsForm
          artist={artist}
          setArtist={setArtist}
          generateArtist={generateArtist}
          clearArtists={clearArtists}
        />
      </div>
      <div className="w-full sm:w-10/12 2xl:w-5/6 h-4/6 bg-black flex flex-col">
        <ArtistsList data={similarArtists.data} loading={loading} />
      </div>
      <div>
        <p className="text-[0.65rem] text-left mt-2">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/annadepablopuig/"
            className="hover:line-through"
          >
            Anna de Pablo Puig
          </a>
          . Open-sourced in{" "}
          <a
            href="https://github.com/annadpp/SheCodes_RelatedArtistsGenerator"
            className="hover:line-through"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
