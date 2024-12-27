import { expect, test } from "@playwright/test";
import { resetWamMaps } from "../utils/map-editor/uploader";
import Map from "../utils/map";
import { login } from "../utils/roles";
import { oidcMatrixUserLogin } from "../utils/oidc";
import ChatUtils from "./chatUtils";
import matrixApi from "./matrixApi";

test.setTimeout(120000);

test.describe("chat moderation", () => {
  test.beforeEach(
    "Ignore tests on webkit because of issue with camera and microphone",

    async ({ browserName, request, page }) => {
      //WebKit has issue with camera
      if (browserName === "webkit") {
        //eslint-disable-next-line playwright/no-skipped-test
        test.skip();
        return;
      }
      await resetWamMaps(request);
      await page.goto(Map.url("empty"));
      await ChatUtils.resetMatrixDatabase();
    }
  );

  test.afterAll("reset matrix database", async () => {
    await ChatUtils.resetMatrixDatabase();
  });

  test("should create a public chat room and verify admin permissions", async ({ page }, { project }) => {
    const isMobile = project.name === "mobilechromium";
    await login(page, "test", 3, "us-US", isMobile);
    await oidcMatrixUserLogin(page, isMobile);
    await ChatUtils.openChat(page);
    await ChatUtils.openCreateRoomDialog(page);
    const publicChatRoomName = ChatUtils.getRandomName();
    await page.getByTestId("createRoomName").fill(publicChatRoomName);
    await page.getByTestId("createRoomButton").click();

    await expect(page.getByText(publicChatRoomName)).toBeAttached();

    await expect(page.getByTestId(publicChatRoomName).getByTestId("toggleRoomMenu")).toBeAttached(); 

    await page.getByTestId(publicChatRoomName).hover();
    await page.getByTestId(publicChatRoomName).getByTestId("toggleRoomMenu").click();

    await page.getByTestId(publicChatRoomName).getByTestId("manageParticipantOption").click();

    await expect(page.getByTestId("@john.doe:matrix.workadventure.localhost-participant")).toBeAttached();

    await expect(page.getByTestId("@john.doe:matrix.workadventure.localhost-participant").getByTestId("@john.doe:matrix.workadventure.localhost-permissionLevel")).toHaveText("Admin");
    await expect(page.getByTestId("@john.doe:matrix.workadventure.localhost-participant").getByTestId("@john.doe:matrix.workadventure.localhost-membership")).toHaveText("Joined");

  });

  test("should manage participants and permissions in public chat room", async ({ page }, { project }) => {
    const isMobile = project.name === "mobilechromium";
    await login(page, "test", 3, "us-US", isMobile);
    await oidcMatrixUserLogin(page, isMobile);
    await ChatUtils.openChat(page);
    await ChatUtils.openCreateRoomDialog(page);
    const publicChatRoomName = ChatUtils.getRandomName();
    await page.getByTestId("createRoomName").fill(publicChatRoomName);
    await page.getByTestId("createRoomButton").click();

    await matrixApi.overrideRateLimitForUser('@john.doe:matrix.workadventure.localhost');

    await expect(page.getByText(publicChatRoomName)).toBeAttached();

    await expect(page.getByTestId(publicChatRoomName).getByTestId("toggleRoomMenu")).toBeAttached(); 

    await page.getByTestId(publicChatRoomName).hover();
    await page.getByTestId(publicChatRoomName).getByTestId("toggleRoomMenu").click();

    await page.getByTestId(publicChatRoomName).getByTestId("manageParticipantOption").click();

    await expect(page.getByTestId("@john.doe:matrix.workadventure.localhost-participant")).toBeAttached();

    await expect(page.getByTestId("inviteParticipantsModalContent").getByPlaceholder("Users")).toBeAttached();

    await page.getByTestId("inviteParticipantsModalContent").getByPlaceholder("Users").fill("admin");

    await page.getByTestId("inviteParticipantsModalContent").getByText("admin (@admin:matrix.workadventure.localhost)").click();

    await page.getByTestId("createRoomButton").click();

    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-kickButton")).toBeAttached();
    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-banButton")).toBeAttached();
    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-membership")).toHaveText("Invited");
   
    await page.getByTestId("@admin:matrix.workadventure.localhost-banButton").click();

    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-membership")).toHaveText("Banned");
    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-unbanButton")).toBeAttached();

    await page.getByTestId("@admin:matrix.workadventure.localhost-unbanButton").click();

    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-membership")).toHaveText("Leaved");
    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-inviteButton")).toBeAttached();
    await page.getByTestId("@admin:matrix.workadventure.localhost-inviteButton").click();

    await matrixApi.acceptAllInvitations(publicChatRoomName);
   
    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-membership")).toHaveText("Joined");

    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-kickButton")).toBeAttached();
    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-banButton")).toBeAttached();

    await expect(page.getByTestId("@admin:matrix.workadventure.localhost-permissionLevel")).toBeEnabled();
    
    await page.getByTestId("@admin:matrix.workadventure.localhost-permissionLevel").selectOption("MODERATOR");

    // Wait for power level update to be reflected in the Matrix API
    // eslint-disable-next-line playwright/no-wait-for-timeout
    await page.waitForTimeout(1000);

    const powerLevel = await matrixApi.getMemberPowerLevel(publicChatRoomName);

    expect(powerLevel).toBe(50);

  });

});