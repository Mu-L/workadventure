import {expect, Page} from "@playwright/test";

class Menu {

    async openChat(page: Page) {
        await page.click('button.chat-btn');
        await expect(page.locator('#chat.chatWindow')).toBeVisible();
    }

    async openMapEditor(page: Page) {
        await page.getByTestId('map-menu').click({timeout: 30_000});
        await page.getByTestId('map-editor').click();
        await expect(await page.getByTestId('map-editor')).toBeHidden();
        // await expect(await page.getByRole('button', {name: 'toggle-map-editor'}).first()).toHaveClass(/border-top-light/);
    }

    async openMenu(page: Page, isMobile: boolean) {
        if(isMobile){
            await expect(page.locator('button#burgerIcon')).toBeVisible();
            const mobileMenuVisible = await page.locator('button#burgerIcon img.tw-rotate-0').isVisible();
            if(mobileMenuVisible){
                await page.click('button#burgerIcon');
            }
        }
        await page.getByTestId('action-user').click({timeout: 30_000});
        await expect(await page.getByTestId('profile-menu')).toHaveClass(/backdrop-blur/);
    }

    async openMapMenu(page: Page) {
        // await page.pause();
        await page.getByTestId('map-menu').click();
        await expect(page.getByTestId('map-sub-menu')).toHaveClass(/backdrop-blur/);
    }

    async closeMenu(page: Page) {
        await page.getByTestId('action-user').click({timeout: 30_000});
        await expect(page.getByTestId('profile-menu')).toBeHidden();
    }

    async closeMapMenu(page: Page) {
        await page.getByTestId('map-menu').click({timeout: 30_000});
        await expect(page.getByTestId('map-sub-menu')).toBeHidden();
    }

    async waitForMapMenu(page: Page, timeout = 30_000) {
        await expect(page.getByTestId('map-menu')).toBeVisible({
            timeout
        });
    }

    async closeMapEditor(page: Page) {
        //await page.locator('.map-editor .configure-my-room .close-window').click();
        await page.locator('.map-editor .sidebar .close-window').click();
        await expect(page.locator('.map-editor .configure-my-room .close-window')).toBeHidden();
    }

    async toggleMegaphoneButton(page: Page) {
        await this.openMapMenu(page);
        await page.getByTestId('global-message').click({timeout: 30_000});
    }

    async isThereMegaphoneButton(page: Page) {
        await this.openMapMenu(page);
        await expect(page.getByText('Use megaphone')).toBeVisible();
        await this.closeMapMenu(page);
    }

    async isNotThereMegaphoneButton(page: Page) {
        await this.openMapMenu(page);
        await expect(page.getByText('Use megaphone')).toBeHidden();
        await this.closeMapMenu(page);
    }

    async openStatusList(page : Page, isMobile = false){
        if(isMobile){
            await page.getByTestId('burger-menu').click();
            /*await expect(await page.locator('button#burgerIcon')).toBeVisible();
            const mobileMenuVisible = await page.locator('button#burgerIcon img.tw-rotate-0').isVisible();
            if(mobileMenuVisible){
                await page.click('button#burgerIcon');
            }*/
        }
        await page.getByTestId('action-user').click();
    }

    async clickOnStatus(page:Page,status: string){
        await expect(page.getByText(status)).toBeVisible();
        await page.getByText(status).click();
        //eslint-disable-next-line playwright/no-wait-for-timeout
        await page.waitForTimeout(500);
    }

    async turnOnCamera(page:Page){
        if(page.getByTestId('camera-button').locator('.bg-danger')) return;
        await page.getByTestId('camera-button').click();
        await expect(page.getByTestId('camera-button').locator('.bg-danger')).toBeVisible();
    }
    async turnOffCamera(page:Page){
        if(await page.getByAltText('Turn on webcam').isVisible()) return;
        await page.getByAltText('Turn off webcam').click();
        await expect(page.getByAltText('Turn on webcam')).toBeVisible();
    }
    async turnOnMicrophone(page:Page){
        if(page.getByTestId('microphone-button').locator('.bg-danger')) return;
        await page.getByTestId('microphone-button').click();
        await expect(page.getByTestId('microphone-button').locator('.bg-danger')).toBeVisible();
    }
    async turnOffMicrophone(page:Page){
        //if(page.getByTestId('microphone-button').locator('.bg-danger')) return;
        await page.getByTestId('microphone-button').click();
        await expect(page.getByTestId('microphone-button').locator('.bg-danger')).toBeHidden();
    }

    async expectCameraOn(page: Page) {
        await expect(page.getByTestId('camera-button')).not.toHaveClass(/bg-danger/);
    }

    async expectCameraOff(page: Page) {
        await expect(page.getByTestId('camera-button')).toHaveClass(/bg-danger/);
    }

    async expectMicrophoneOn(page: Page) {
        await expect(page.getByTestId('microphone-button')).not.toHaveClass(/bg-danger/);
    }

    async expectMicrophoneOff(page: Page) {
        await expect(page.getByTestId('microphone-button')).toHaveClass(/bg-danger/);
    }

    async closeNotificationPopUp(page:Page){
        if(await page.getByRole('button',{name:'Continue without notification'}).isHidden())return;
        await page.getByRole('button',{name:'Continue without notification'}).click();
        await expect(page.getByRole('button',{name:'Continue without notification'})).toBeVisible();

    }
    async closeCameraPopUp(page:Page){
        if(await page.getByRole('button',{name:'Continue without webcam'}).isHidden())return;
        await page.getByRole('button',{name:'Continue without webcam'}).click();
        await expect(page.getByRole('button',{name:'Continue without webcam'})).toBeVisible();

    }

    async closeMapEditorConfigureMyRoomPopUp(page:Page){
        await page.locator('.configure-my-room button.close-window').click();
    }
}

export default new Menu();
