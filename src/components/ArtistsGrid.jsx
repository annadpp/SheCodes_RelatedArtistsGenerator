const ArtistsGrid = ({ data }) => (
  <>
    {data.length > 0 && (
      <p className="text-sm xl:text-md text-white px-16 py-10">
        You will love...
      </p>
    )}
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 px-12 xl:px-16">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white p-2 md:p-5 uppercase h-24 lg:h-32 flex flex-col justify-center"
        >
          <ul>
            <li>
              <p className="bg-lime-green w-fit text-sm md:text-base xl:text-lg 2xl:text-xl mb-2">
                {item.band}
              </p>
            </li>
            <li>
              <p className="text-[0.60rem] md:text-xs xl:text-sm 2xl:text-base line-through">
                {item.style}
              </p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  </>
);

export default ArtistsGrid;
