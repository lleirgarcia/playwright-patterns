# Playwright Avanzado - Page Object Model (POM) Example

## Overview

This project demonstrates the use of the **Page Object Model (POM)** design pattern for end-to-end (E2E) testing using [Playwright](https://playwright.dev/). The POM pattern is a best practice in test automation, especially for SDET/QA professionals, as it promotes maintainability, reusability, and readability of test code.

## Project Structure

```
src/
  pages/
    components/
      product-card.component.ts
    base.page.ts
    login.page.ts
    inventory.page.ts
    tests/
      tests.spec.ts
  types/
    credentials.ts
```

### Key Files

#### 1. `src/pages/login.page.ts`

- **Purpose:** Encapsulates all interactions with the login page of the application.
- **Responsibilities:**
  - Navigating to the login page.
  - Filling in username and password fields.
  - Submitting the login form.
  - Retrieving error messages after failed login attempts.
- **Benefits:** If the login page changes (e.g., selector updates), only this file needs to be updated.

#### 2. `src/pages/inventory.page.ts`

- **Purpose:** Encapsulates actions and verifications related to the inventory/products page.
- **Responsibilities:**
  - Retrieving the page title.
  - Adding items to the cart by product name.
  - Navigating to the cart.
  - Getting the cart count.
  - Getting product cards by name.
- **Benefits:** Centralizes inventory page logic, making tests more readable and robust.

#### 3. `src/pages/components/product-card.component.ts`

- **Purpose:** Represents a single product card in the inventory.
- **Responsibilities:**
  - Encapsulates actions for a product (e.g., get name, add to cart, remove from cart).
- **Benefits:** Promotes reusability and separation of concerns for product-specific actions.

#### 4. `src/pages/tests/tests.spec.ts`

- **Purpose:** Contains Playwright test cases for inventory and cart functionality.
- **Responsibilities:**
  - Uses Playwright's test runner to execute scenarios using the page objects.
  - Demonstrates how to use the POM classes in real tests.

#### 5. `src/types/credentials.ts`

- **Purpose:** Defines TypeScript interfaces for user credentials.
- **Responsibilities:**
  - Provides type safety and clarity for login data used in tests.

## Design Pattern: Page Object Model (POM)

### What is POM?

The **Page Object Model** is a design pattern that creates an abstraction layer for web pages in test automation. Each page or significant component of the application is represented by a class, encapsulating its elements and behaviors.

### Why Use POM?

- **Maintainability:** Changes in the UI require updates only in the page object, not in every test.
- **Reusability:** Common actions (e.g., login, add to cart) can be reused across multiple tests.
- **Readability:** Tests are easier to read and understand, focusing on business logic rather than UI details.
- **Separation of Concerns:** Keeps test logic separate from page structure and selectors.

### Example Usage

```ts
const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');

const inventoryPage = new InventoryPage(page);
const title = await inventoryPage.getTitle();
expect(title).toContain('Products');
```

## Best Practices

- **One Page Object per Page:** Each significant page/component should have its own class.
- **Encapsulate Selectors:** Keep all selectors and page-specific logic inside the page object.
- **Expose Business Actions:** Methods should represent user actions, not low-level UI operations.
- **Avoid Assertions in Page Objects:** Keep assertions in test files, not in page objects.

## Conclusion

By following the Page Object Model, this project ensures that automated tests are robust, maintainable, and scalable—key qualities for any SDET/QA automation framework.

---
**Author:** lleirgarcia@gmail.com  
**Tools:** Playwright, TypeScript