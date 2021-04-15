export interface locCoords {
  lat?: number;
  lon?: number;
}

export interface apiStructure {
  current?: {
    dt: number;
    clouds: number;
    humidity: number;
    sunrise: number;
    sunset: number;
    temp: number;
    visibility: number;
    wind_deg: number;
    wind_speed: number;
    weather: {
      description: string;
      main: string;
      icon: string;
    }[];
  };
  daily?: {
    clouds: number;
    dt: number;
    humidity: number;
    sunrise: number;
    sunset: number;
    wind_deg: number;
    wind_speed: number;
    weather: {
      description: string;
      main: string;
      icon: string;
    }[];
    temp: {
      day: number;
      eve: number;
      max: number;
      min: number;
      morn: number;
      night: number;
    };
  }[];
  hourly?: {
    clouds: number;
    dt: number;
    humidity: number;
    temp: number;
    wind_deg: number;
    wind_speed: number;
    uvi: number;
    pop: number;
    weather: {
      icon: string;
      main: string;
    }[];
  }[];
  timezone?: string;
  timezone_offset?: number;
}

export interface dailyStructure {
  index: number;
  clouds: number;
  dt: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  wind_deg: number;
  wind_speed: number;
  timezone_offset: number;
  weather: {
    description: string;
    main: string;
    icon: string;
  }[];
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
}
[];

export interface hourlyStructure {
  clouds: number;
  dt: number;
  humidity: number;
  temp: number;
  wind_deg: number;
  wind_speed: number;
  uvi: number;
  pop: number;
  weather: {
    icon: string;
    main: string;
  }[];
}
[];

export interface favsColProps {
  name?: string;
  lat?: number;
  lon?: number;
}

export interface reduxStore {
  error: {
    message: string;
    code: number;
    severity: string;
  };
  user: {
    name: string;
    favourites: [
      {
        name: string;
        lat: number;
        lon: number;
      }
    ];
  };
  util: {
    loading: boolean;
    currentHour: number;
  };
  forecast: {
    current: {
      dt: number;
      clouds: number;
      humidity: number;
      sunrise: number;
      sunset: number;
      temp: number;
      visibility: number;
      wind_deg: number;
      wind_speed: number;
      weather: [
        {
          description: string;
          main: string;
          icon: string;
        }
      ];
    };
    daily: [
      {
        clouds: number;
        dt: number;
        humidity: number;
        sunrise: number;
        sunset: number;
        wind_deg: number;
        wind_speed: number;
        weather: [
          {
            description: string;
            main: string;
            icon: string;
          }
        ];
        temp: {
          day: number;
          eve: number;
          max: number;
          min: number;
          morn: number;
          night: number;
        };
      }
    ];
    hourly: [
      {
        clouds: number;
        dt: number;
        humidity: number;
        temp: number;
        wind_deg: number;
        wind_speed: number;
        uvi: number;
        pop: number;
        weather: [
          {
            icon: string;
            main: string;
          }
        ];
      }
    ];
    timezone: string;
    timezone_offset: number;
  };
}
