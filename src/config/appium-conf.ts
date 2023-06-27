import dotenv from 'dotenv';
import { RemoteOptions } from 'webdriverio';
dotenv.config();


const { APPIUM_HOST, APPIUM_PORT, LOG_LEVEL } = process.env;

if (!APPIUM_HOST) {
  throw new Error("Missing APPIUM_HOST")
}

if (!APPIUM_PORT) {
  throw new Error("Missing APPIUM_PORT")
}

export const getBaseAndroidCapabilities = (appPackage: string, appActivity: string) => {
  return {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
    'appium:appPackage': appPackage,
    'appium:appActivity': appActivity,
  }
}

export const getConfig = (capabilities: any): RemoteOptions => {
  return {
    hostname: APPIUM_HOST,
    port: parseInt(APPIUM_PORT),
    logLevel: LOG_LEVEL ? LOG_LEVEL as 'info' : 'info',
    capabilities: capabilities
  }
}