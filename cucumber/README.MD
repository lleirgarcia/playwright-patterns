# Cucumber + Playwright Integration

## Overview

This folder demonstrates how to use [Cucumber](https://cucumber.io/) with [Playwright](https://playwright.dev/) for Behavior-Driven Development (BDD) style end-to-end (E2E) testing in TypeScript.  
It provides a clear separation between feature specifications (written in Gherkin), step definitions (TypeScript), and Playwright-based browser automation.

---

## Structure

```
cucumber/
  features/
    inventory.feature      # Gherkin scenarios for inventory functionality
    login.feature          # Gherkin scenarios for login functionality
  helpers/
    playwrightHelper.ts    # Helper to launch Playwright browsers/contexts
  steps/
    hooks.ts               # Cucumber hooks for setup/teardown
    inventory.steps.ts     # Step definitions for inventory.feature
    login.steps.ts         # Step definitions for login.feature
    world.ts               # Custom World for sharing context between steps
```

---

## How It Works

- **Feature Files (`features/`)**  
  Written in Gherkin syntax, these files describe user stories and scenarios in plain English.  
  Example:  
  ```gherkin
  Scenario: User can add an item to the cart
    When I add "Sauce Labs Backpack" to the cart
    Then the cart count should be 1
  ```

- **Step Definitions (`steps/`)**  
  Each step in the feature files is implemented in TypeScript using Playwright for browser automation.  
  Example:  
  ```typescript
  When('I add {string} to the cart', async function (this: PlaywrightWorld, product: string) {
    const productCard = await inventoryPage.getProductCardByName(product);
    await productCard?.addToCart();
  });
  ```

- **Hooks (`hooks.ts`)**  
  Sets up and tears down Playwright browser and page instances before and after each scenario.

- **World (`world.ts`)**  
  Custom World object to share browser and page context between steps.

- **Helpers (`helpers/playwrightHelper.ts`)**  
  Contains utility functions for launching Playwright with the correct configuration.

---

## How to Run

1. **Install dependencies** (from project root):
   ```bash
   npm install
   ```

2. **Run Cucumber tests**:
   ```bash
   npx cucumber-js --require-module ts-node/register --require cucumber/steps/**/*.ts
   ```
   Or use the npm script if defined:
   ```bash
   npm run cucumber
   ```

---

## Key Concepts

- **Gherkin:** Write human-readable scenarios that describe application behavior.
- **Step Definitions:** Implement those scenarios in TypeScript, using Playwright for browser automation.
- **Hooks & World:** Manage browser/page lifecycle and share context between steps.
- **Helpers:** Centralize Playwright launch/configuration logic for reuse and consistency.

---

## Why This Structure?

- **Separation of concerns:** Feature files, step logic, and browser setup are all kept separate.
- **Reusability:** Common setup/teardown and helpers can be reused across scenarios.
- **Maintainability:** Easy to add new features or steps without duplicating code.
- **Scalability:** Supports growing test suites and complex workflows.

---

## Author

lleirgarcia@gmail.com
