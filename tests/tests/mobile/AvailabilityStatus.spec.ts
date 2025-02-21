import { expect, test } from '@playwright/test';
import Menu  from '../utils/menu';
import Map  from '../utils/map';
import { publicTestMapUrl } from '../utils/urls';
import { getPage } from '../utils/auth'
import { isMobile } from "../utils/isMobile";

test.describe('Availability Status on mobile', () => {
    // FIXME remove when mobileChromium will be no more
    test.describe('Busy Status',() => {
        test.beforeEach(async ({ page }) => {
            if (!isMobile(page)) {
                //eslint-disable-next-line playwright/no-skipped-test
                test.skip();
            }
        });
       test('should return to online status when you move',async({ browser}) => {
           const statusName = "Busy";
           const page = await getPage(browser, 'Alice',
            publicTestMapUrl("tests/E2E/empty.json", "availability-status")
           );
           await Menu.openStatusList(page, true);
           await Menu.clickOnStatus(page, statusName);
           //await Menu.openStatusList(page, true);
           await expect(page.getByRole('button', {name: statusName}).locator('svg')).toBeVisible();

           await Map.walkTo(page, 'ArrowRight', 1000);
           await Menu.openStatusList(page, true);
           await expect(page.getByRole('button', {name: 'Online'}).locator('svg')).toHaveClass(/opacity-100/);
           await page.close();
           await page.context().close();
       });
    });
    test.describe('Back in a moment status',() => {
        test.beforeEach(async ({ page }) => {
            if (!isMobile(page)) {
                test.skip();
            }
        });
        test('should return to online status when you move',async({ browser}) => {
            const statusName = "Back in a moment";
            const page = await getPage(browser, 'Alice',
             publicTestMapUrl("tests/E2E/empty.json", "availability-status")
            );
            await Menu.openStatusList(page, true);
            await Menu.clickOnStatus(page, statusName);
            //await Menu.openStatusList(page, true);
            await expect(page.getByRole('button', {name: statusName}).locator('svg')).toBeVisible();
            await Map.walkTo(page, 'ArrowRight', 1000);

            //await Menu.openStatusList(page, true);
            await expect(page.getByRole('button', {name: 'Online'}).locator('svg')).toHaveClass(/opacity-100/);
            await page.close();
            await page.context().close();
        });
    });
    test.describe('Do not disturb status',() => {
        test.beforeEach(async ({ page }) => {
            if (!isMobile(page)) {
                test.skip();
            }
        });
        test('should return to online status when you move',async({ browser}) => {
           const statusName = "Do not disturb";
           const page = await getPage(browser, 'Alice',
            publicTestMapUrl("tests/E2E/empty.json", "availability-status")
           );
           await Menu.openStatusList(page, true);
           await Menu.clickOnStatus(page, statusName);
           //await Menu.openStatusList(page, true);
           await expect(page.getByRole('button', {name: statusName}).locator('svg')).toBeVisible();
           await Map.walkTo(page, 'ArrowRight', 1000);
           await Menu.openStatusList(page, true);
           await expect(page.getByRole('button', {name: 'Online'}).locator('svg')).toHaveClass(/opacity-100/);
           await page.close();
           await page.context().close();
       });
    });
});