
import { remote } from 'webdriverio';
import SettingsScreen from '@screens/Settings';
import { getBaseAndroidCapabilities, getConfig } from '@config/appium-conf';

describe("Settings suite", async () => {
    const config = getBaseAndroidCapabilities('com.android.settings', '.Settings');
    const settingsScreen = new SettingsScreen();

    it("Should open settings -> Battery", async () => {
        const driver = await remote(getConfig(config));
        try {
            const batteryItem = await driver.$(settingsScreen.batteryButton);
            await batteryItem.click();
        } finally {
            await driver.pause(1000);
            await driver.deleteSession();
        }
    });

})