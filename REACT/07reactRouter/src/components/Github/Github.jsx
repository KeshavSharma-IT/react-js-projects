import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log(data);
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/hiteshchoudhary')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="flex items-center justify-center text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <img
        src={data.avatar_url}
        alt="Git picture"
        width={300}
        className="rounded-full flex-col p-4"
      />
      <div className="flex flex-col justify-center p-4">
        <h1 className="text-2xl font-bold p-2">Name: {data.name}</h1>
        <h2 className="text-2xl font-bold p-2">Followers: {data.followers}</h2>
        <h2 className="text-2xl font-bold p-2">
          Twitter Username: {data.twitter_username}
        </h2>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/KeshavSharma-IT");
  return response.json();
};
