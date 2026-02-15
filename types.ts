
export enum SystemMode {
  DISARM = 'Disarm',
  ARM = 'Arm',
  HOME_ARM = 'Home Arm',
  SOS = 'SOS',
  LOG = 'Log',
  SETTINGS = 'Settings'
}

export interface WeatherData {
  currentTemp: number;
  minTemp: number;
  maxTemp: number;
  condition: 'Sunny' | 'Cloudy' | 'Rainy' | 'Snowy';
}

export interface SystemStatus {
  battery: number;
  isCharging: boolean;
  wifiSignal: number; // 0-3
  lteSignal: number; // 0-4
}
