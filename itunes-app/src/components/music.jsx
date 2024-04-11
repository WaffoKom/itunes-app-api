import React from "react";

const Music = ({ data }) => {
  // console.log(data.results);
  return (
    <>
      <div className="flex-col w-40 mx-auto">
        <img
          src={`${data.results.artworkUrl100}`}
          alt="A image of an artist"
          className=""
        />
        <div className="">
          <ul className="">
            <li className="">{data.results.artistName}</li>
            <li className="">{data.results.collectionCensoredName}</li>
            <li className="">{data.previewUrl}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Music;
