import Error from "./Error.jsx";
import Places from "./Places.jsx";
import { useEffect, useState } from "react";

// const places = localStorage.getItem("places");

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  //better implementation
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      //handler for error response
      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({message: error.message || "Couldn't fetch data, please try again or refresh the page"});
      }

      setIsFetching(false);
    }
    fetchData();

    // Refactored
    // fetch("http://localhost:3000/places")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((res) => {
    //     setAvailablePlaces(res.places);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }, []);

  if (error) {
    return <Error title="An error occured" message={error.message} />;
  }

  return <Places title="Available Places" places={availablePlaces} isLoading={isFetching} loadingText="Loading Places..." fallbackText="No places available." onSelectPlace={onSelectPlace} />;
}
