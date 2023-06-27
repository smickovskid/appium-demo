
const { remote } = require('webdriverio');
import { getConfig } from '../../appium-conf';

describe("Settings suite", async () => {
    const config = getConfig('android');

    it("Should open settings -> Battery", async () => {
        const driver = await remote(config);
        try {
            const batteryItem = await driver.$('//*[@text="Battery"]');
            await batteryItem.click();
        } finally {
            await driver.pause(1000);
            await driver.deleteSession();
        }
    });

})