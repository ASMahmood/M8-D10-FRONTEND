export const convertUnixToReadble = (time: number): string => {
  let date = new Date(time * 1000); //CONVERT UNIX FROM SECONDS TO MILLISECONDS
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};

export const kelvinToCelsius = (k: number): number => {
  let celsius = k - 273.15;
  return Math.round(celsius * 10) / 10;
};

export const convertUnixToDate = (time: number): string => {
  let date = new Date(time * 1000);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let month = months[date.getMonth()];
  let weekDay = days[date.getDay()];
  let day = date.getDate();
  let formattedTime = weekDay + " " + day + "th " + month;
  return formattedTime;
};
