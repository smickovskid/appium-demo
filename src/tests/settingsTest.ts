
const { remote } = require('webdriverio');
import SettingsScreen from '@screens/Settings';
import { getConfig } from '@config/appium-conf';

describe("Settings suite", async () => {
    const config = getConfig('android');
    const settingsScreen = new SettingsScreen();

    it("Should open settings -> Battery", async () => {
        const driver = await remote(config);
        try {
            const batteryItem = await driver.$(settingsScreen.batteryButton);
            await batteryItem.click();
        } finally {
            await driver.pause(1000);
            await driver.deleteSession();
        }
    });

})