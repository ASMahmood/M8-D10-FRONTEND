export const addToFav = async (city: string, lat: number, lon: number) => {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_BE_URL}/users/favourites/add`,
      {
        method: "PUT",
        body: JSON.stringify({
          location: city,
          lat: lat,
          lon: lon,
        }),
        credentials: "include",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-type": "application/json",
        },
      }
    );
    let parsedResp = await response.json();
    if (parsedResp.message === "Added!") {
      return "success";
    } else return "failed";
  } catch (error) {
    console.log(error);
  }
};

export const removeFromFav = async (id: string) => {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_BE_URL}/users/favourites/add`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: id,
        }),
        credentials: "include",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-type": "application/json",
        },
      }
    );
    let parsedResp = await response.json();
    if (parsedResp.message === "Removed!") {
      return "success";
    } else return "failed";
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = async () => {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_BE_URL}/users/homepage/userinfo/help/me`,
      {
        credentials: "include",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      }
    );
    let parsedResp = await response.json();
    return parsedResp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchCoordinates = async (query: string) => {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_BE_URL}/weather/city?city=${query}`,
      {
        credentials: "include",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      }
    );
    let parsedResp = await response.json();
    return parsedResp;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchForecast = async (lat: number, lon: number) => {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_BE_URL}/weather/geolocation?lat=${lat}&lon=${lon}`,
      {
        credentials: "include",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      }
    );
    let parsedResp = await response.json();
    return parsedResp;
  } catch (error) {
    console.log(error);
    return error;
  }
};
