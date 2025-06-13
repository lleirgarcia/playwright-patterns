# Playwright Avanzado - Facade Design Pattern Example

## Overview

This project demonstrates the use of the **Facade Design Pattern** for end-to-end (E2E) testing with [Playwright](https://playwright.dev/). The Facade pattern is implemented to provide a higher-level API that simplifies and centralizes complex interactions across multiple page objects, making test code more readable, maintainable, and business-oriented—ideal for SDET/QA professionals.

---

## What is the Facade Design Pattern?

The **Facade Pattern** is a structural design pattern that provides a simplified interface to a complex subsystem. In test automation, it means creating a single class (the "facade") that exposes high-level methods for business actions, internally coordinating multiple page objects and their interactions.

**Benefits:**
- **Simplifies test code:** Tests call business actions, not low-level UI steps.
- **Centralizes logic:** Changes in workflows only require updates in the facade.
- **Improves readability:** Tests are easier to understand and maintain.

---

## Project Structure

```
src/
  facades/
    app.facade.ts
    tests/
      1_login.spec.ts
      2_inventory.spec.ts
  pages/
    components/
      product-card.component.ts
    login.page.ts
    inventory.page.ts
  types/
    credentials.ts
```

---

## How is the Facade Pattern Built Here?

### 1. **Page Objects (`/pages`)**
- **login.page.ts**: Encapsulates all interactions with the login page.
- **inventory.page.ts**: Encapsulates all interactions with the inventory/products page.
- **components/product-card.component.ts**: Encapsulates actions for a single product card.

These files follow the Page Object Model, exposing low-level methods for interacting with the UI.

---

### 2. **Facade (`/facades/app.facade.ts`)**

The [`AppFacade`](../app.facade.ts) class acts as the single entry point for business-level actions. It composes the page objects and exposes methods such as:

- `loginAsUser(username, password)`
- `addProductToCartByName(productName)`
- `removeProductFromCartByName(productName)`
- `getCartCount()`
- `goToCart()`
- `getFirstProductTitle()`
- `getLoginErrorMessage()`

**Example:**
```typescript
const app = new AppFacade(page);
await app.loginAsUser('standard_user', 'secret_sauce');
await app.addProductToCartByName('Sauce Labs Backpack');
expect(await app.getCartCount()).toBe(1);
```

---

### 3. **Tests (`/facades/tests/`)**

Tests use only the facade, not the page objects directly. This keeps them clean and focused on business flows.

**Example: [`2_inventory.spec.ts`](tests/2_inventory.spec.ts)**
```typescript
test('User can add an item to the cart', async ({ page }) => {
    const app = new AppFacade(page);
    await app.addProductToCartByName("Sauce Labs Backpack");
    expect(await app.getCartCount()).toBe(1);
});
```

---

## Summary

- **Page Objects** encapsulate low-level UI logic.
- **Facade** (`AppFacade`) exposes high-level business actions by orchestrating page objects.
- **Tests** interact only with the facade, making them concise and robust.

This approach is highly recommended for scalable, maintainable test automation projects.

---

**Author:** lleirgarcia@gmail.com  
**Tools:** Playwright, TypeScript