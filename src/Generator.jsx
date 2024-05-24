import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Generator(props) {
  const [similarArtists, setSimilarArtists] = useState({
    ready: false,
    data: [],
  });
  const [artist, setArtist] = useState("");
  const [loading, setLoading] = useState(false); // Inicialmente el loading está en false, porque no se ha hecho ninguna llamada a la API todavía

  function handleResponse(response) {
    console.log("Response from AI:", response.data.answer);
    let data;
    try {
      // Parse the response as JSON
      data = JSON.parse(response.data.answer);
    } catch (e) {
      console.error("Failed to parse response data:", e);
      data = [];
    }

    // Check if data is an array
    if (Array.isArray(data)) {
      setSimilarArtists({ ready: true, data: data });
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
    let prompt = `User instructions: Give me 6 bands similar to ${artist} following the context.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Generator">
      <h1>Hello from generator</h1>
      <form onSubmit={generateArtist}>
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Enter an artist"
        />
        <button type="submit">Search similar artists</button>
      </form>
      {loading ? (
        "Loading..."
      ) : similarArtists.ready ? (
        <div>
          {similarArtists.data ? (
            similarArtists.data.map((item, index) => (
              <div key={index}>
                <ul>
                  <li>{item.band}</li>
                  <li>{item.style}</li>
                </ul>
              </div>
            ))
          ) : (
            <p>There has been an error. Please, try again.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
