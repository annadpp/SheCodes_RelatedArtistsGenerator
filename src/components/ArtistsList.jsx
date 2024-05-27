import Loader from "./Loader";
import ArtistsGrid from "./ArtistsGrid";

const ArtistList = ({ data, loading }) => {
  if (!data) {
    return <p>There has been an error. Please, try again.</p>;
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full h-full">
        {(loading || data.length > 0) && (
          <div className="text-white uppercase line-through transform rotate-180 p-4">
            {loading || data.length > 0
              ? "Related artists generator"
              : "You will love..."}
          </div>
        )}
        {loading || data.length === 0 ? (
          <Loader loading={loading} hasData={data.length > 0} />
        ) : (
          <ArtistsGrid data={data} />
        )}
      </div>
    </div>
  );
};

export default ArtistList;
