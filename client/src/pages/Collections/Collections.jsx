import React, { useEffect, useState } from "react";
import MoodImage from "../../components/MoodImage";

const Collections = ({ user }) => {
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    try {
      const res = await fetch(
        "https://moodboard-mern.herokuapp.com/api/collections",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            user: user._id,
          },
        }
      );
      if (res.ok) {
        const responseData = await res.json();
        setCollections(responseData.data);
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

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {collections.map((collection) => (
          <MoodImage key={collection._id} data={collection} />
        ))}
      </div>
    </>
  );
};

export default Collections;
