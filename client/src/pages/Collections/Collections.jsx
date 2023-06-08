import React, { useEffect, useState } from "react";
import { getToken } from "../../utilities/users-service";

const Collections = ({ user }) => {
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    try {
      const token = getToken();
      console.log(token);
      const res = await fetch("http://localhost:3001/api/collections", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          user: user._id,
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const responseData = await res.json();
        console.log("response data", responseData);
        setCollections(responseData.data);
        // console.log("collections", collections);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollections();
  }, [user]);

  useEffect(() => {
    console.log("collections", collections);
  }, [collections]);

  useEffect(() => {
    // Convert collections object into an array
    const collectionsArray = Object.values(collections);

    // Update the state with the collections array
    setCollections(collectionsArray);
  }, []);
  return (
    <>
      <div>Collections</div>
      <div>
        {collections.map((collection) => (
          <div key={collection._id}>
            <h3>{collection.name}</h3>
            <p>{collection.prompt}</p>
            <img src={collection.photo} alt={collection.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Collections;
