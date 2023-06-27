import dotenv from 'dotenv';

dotenv.config();


const { APPIUM_HOST, APPIUM_PORT, LOG_LEVEL } = process.env;

if (!APPIUM_HOST) {
  throw new Error("Missing APPIUM_HOST")
}

if (!APPIUM_PORT) {
  throw new Error("Missing APPIUM_PORT")
}

const capabilitiesAndroid = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.android.settings',
  'appium:appActivity': '.Settings',
};

const capabilitiesIOS = {
  // For demo purposes not implemented
};


export const getConfig = (platform: 'android' | 'ios') => {
  return {
    host: APPIUM_HOST,
    port: parseInt(APPIUM_PORT),
    logLevel: LOG_LEVEL || 'info',
    capabilities: platform === 'android' ? capabilitiesAndroid : capabilitiesIOS,
  }
}