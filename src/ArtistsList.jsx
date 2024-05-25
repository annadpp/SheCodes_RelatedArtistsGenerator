import React from "react";

export default function ArtistList({ data }) {
  if (!data) {
    return <p>There has been an error. Please, try again.</p>;
  }

  return (
    <div>
      {data.length > 0 && <p>You will love...</p>}
      {data.map((item, index) => (
        <div key={index}>
          <ul>
            <li>{item.band}</li>
            <li>{item.style}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
