# Playwright Avanzado - Factory Design Pattern Example

## Overview

This folder demonstrates the use of the **Factory Design Pattern** for generating test data in end-to-end (E2E) testing with [Playwright](https://playwright.dev/). The Factory pattern is used here to centralize and standardize the creation of user objects (and potentially other entities), making your tests more maintainable, readable, and scalable.

---

## What is the Factory Design Pattern?

The **Factory Pattern** is a creational design pattern that provides a way to create objects without exposing the instantiation logic to the client. Instead, clients use factory methods to obtain new instances. This is especially useful in test automation for generating consistent and reusable test data.

**Benefits:**
- **Centralizes test data creation:** All test data is generated in one place.
- **Reduces duplication:** No need to repeat object creation logic in every test.
- **Improves maintainability:** Changes to test data only need to be made in the factory.
- **Supports multiple scenarios:** Easily create valid, invalid, and edge-case data.

---

## Project Structure

```
src/
  factories/
    tests/
      1_login.spec.ts
      2_inventory.spec.ts
    types/
      types.ts
      userFactory.ts
```

---

## How is the Factory Pattern Applied Here?

### 1. **User Type Definition**

Located in [`types.ts`](types/types.ts):

```typescript
export type User = {
  username: string;
  password: string;
  errorMessage?: string;
};
```

This defines the structure for user objects used in tests, including an optional `errorMessage` for negative scenarios.

---

### 2. **UserFactory Implementation**

Located in [`userFactory.ts`](types/userFactory.ts):

The `UserFactory` class provides static methods to generate different types of users for your tests:

```typescript
export class UserFactory {
  static standard(): User { ... }
  static locked(): User { ... }
  static problem(): User { ... }
  static performance(): User { ... }
  static visual(): User { ... }
  static error(): User { ... }
  static custom(username: string, password: string): User { ... }
}
```

- Each method returns a `User` object with predefined credentials.
- Some users include an `errorMessage` for validating login errors.
- The `custom` method allows you to generate users with arbitrary credentials.

---

### 3. **Usage in Tests**

Located in [`tests/1_login.spec.ts`](tests/1_login.spec.ts) and [`tests/2_inventory.spec.ts`](tests/2_inventory.spec.ts):

**Example:**
```typescript
const user = UserFactory.standard();
await loginPage.login(user.username, user.password);

const errorUser = UserFactory.error();
await loginPage.login(errorUser.username, errorUser.password);
expect(await loginPage.getErrorMessage()).toBe(errorUser.errorMessage);
```

- Tests use the factory to obtain user data, ensuring consistency and clarity.
- Error messages are stored with the user, making negative test assertions straightforward.

---

## Summary

- The **Factory Pattern** is used here to generate user test data in a centralized, reusable way.
- All user creation logic is encapsulated in the `UserFactory`, making tests easier to write and maintain.
- This approach is highly recommended for scalable, maintainable test automation projects, and can be extended to other entities (like products) as needed.

---

**Author:** lleirgarcia@gmail.com  
**Tools:** Playwright, TypeScript