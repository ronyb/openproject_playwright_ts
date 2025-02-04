import { test, expect } from '@playwright/test';
import { loginToOpenProject } from '../common';
import { getTimestamp } from '../utils/date_utils';

test('OpenProject Test', async ({ page }) => {
    
    let homePage = await loginToOpenProject(page);

    await homePage.clickSelectProjectButton();
    let projectOverviewPage = await homePage.clickProjectByName("Demo project");

    await projectOverviewPage.clickPlusButton();
    let newWorkPackagePage = await projectOverviewPage.clickAddWorkPackageOfType("Task");

    let newTaskSubject = `Automation Task ${getTimestamp("YYYY-MM-DD HH:mm:ss")}`;
    await newWorkPackagePage.typeSubject(newTaskSubject);
    await newWorkPackagePage.typeDescription("This is the description... \n123");
    
    let workPackagePage = await newWorkPackagePage.clickSaveButton();
    let workPackageSubject = await workPackagePage.getWorkPackageSubject();

    expect(workPackageSubject).toStrictEqual(newTaskSubject);
});