import { expect, test } from "@playwright/test";

test("home page smoke test", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /productized onboarding with explicit agent handoffs/i,
    })
  ).toBeVisible();

  await expect(page.getByText("/start -> /prod -> /ux -> /copy -> /fe -> /qa -> /prod")).toBeVisible();
  await expect(page.getByText("Coding: /start + project_track:coding + stack:vue")).toBeVisible();
  await expect(page.getByText("PrimeVue Starter")).toBeVisible();
  await expect(
    page.getByText("PrimeVue is the default component baseline. Use PrimeVue components for new features.")
  ).toBeVisible();

  await page.goto("/__smoke/chart");
  await expect(page.getByRole("heading", { level: 1, name: "Chart Smoke" })).toBeVisible();
  await expect(page.locator("canvas").first()).toBeVisible();
  expect(pageErrors).toEqual([]);
});
