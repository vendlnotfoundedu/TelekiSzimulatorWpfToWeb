// @ts-check
import { test, expect } from "@playwright/test";
import path from "node:path";
import { describe } from "node:test";

test("has title", async ({ page }) => {
    await page.goto("/");

    // Cím ellenörzése.
    await expect(page).toHaveTitle(/Teleki szimulátor/);

    await page.getByRole("button", { name: "Szerkesztő" }).click();

    const uploadFile = path.join(process.cwd(), "Egy nap az iskolában");

    const uploadPromise = page.waitForEvent("filechooser");
    await page.getByRole("button", { name: "Import (mappa)" }).click();
    const fileChooser = await uploadPromise;
    await fileChooser.setFiles(uploadFile);
});

// Teszt SUITE 1
test.describe("Home page", () => {
    test("TEST ESET 1", async ({ page }) => {
        // SETUP
        await page.goto("/");

        // Cím ellenörzése.
        await expect(page).toHaveTitle(/Teleki szimulátor/);

        await expect(page.getByRole("heading")).toContainText("Teleki szimulátor");
        await expect(page.getByRole("button", { name: "Szerkesztő" })).toBeVisible();
        await expect(page.getByRole("button", { name: "Játék" })).toBeVisible();
    });
});
