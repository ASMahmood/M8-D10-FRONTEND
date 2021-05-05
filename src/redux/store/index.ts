import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import utilReducers from "../reducers/util";
import errorReducers from "../reducers/error";
import userReducers from "../reducers/user";
import forecastReducers from "../reducers/forecast";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initalState = {
  error: {
    message: "",
    code: 0,
    severity: "",
  },
  user: {
    name: "",
    favourites: [],
  },
  util: {
    loading: false,
    currentHour: 0,
    city: "",
    country: "",
  },
  forecast: {
    current: {
      dt: 0,
      clouds: 0,
      humidity: 0,
      sunrise: 0,
      sunset: 0,
      temp: 0,
      visibility: 0,
      wind_deg: 0,
      wind_speed: 0,
      weather: [
        {
          description: "",
          main: "",
          icon: "",
        },
      ],
    },
    daily: [
      {
        clouds: 0,
        dt: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        wind_deg: 0,
        wind_speed: 0,
        weather: [
          {
            description: "",
            main: "",
            icon: "",
          },
        ],
        temp: {
          day: 0,
          eve: 0,
          max: 0,
          min: 0,
          morn: 0,
          night: 0,
        },
      },
    ],
    hourly: [
      {
        clouds: 0,
        dt: 0,
        humidity: 0,
        temp: 0,
        wind_deg: 0,
        wind_speed: 0,
        uvi: 0,
        pop: 0,
        weather: [
          {
            icon: "",
            main: "",
          },
        ],
      },
    ],
    timezone: "",
    timezone_offset: 0,
    lat: 0,
    lon: 0,
  },
};

const fusionOfReducers = combineReducers({
  error: errorReducers,
  util: utilReducers,
  user: userReducers,
  forecast: forecastReducers,
});

export default function configureStore() {
  return createStore(
    fusionOfReducers,
    initalState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
