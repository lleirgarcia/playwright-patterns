# Decorator Pattern - loggedLoginPage

## What is the Decorator Pattern?

The **Decorator Pattern** is a structural design pattern that allows you to add additional functionality to an object dynamically, without modifying its original structure. It is used to extend the behavior of existing classes in a flexible and reusable way by wrapping the original object in a new decorator class.

---

## What is this file for?

The file [`loggedLoginPage.ts`](loggedLoginPage.ts) implements the Decorator pattern over the `LoginPage` class.  
The `LoggedLoginPage` class receives an instance of `LoginPage` and adds log messages before and after executing its main methods (`goto`, `login`, `getErrorMessage`).  
This allows you to:

- **Audit** the navigation and login flow in your tests.
- **Debug** the executed steps easily without modifying the original class.
- **Separate concerns**, keeping logging code out of the main page logic.

**Usage example:**
```typescript
const loginPage = new LoginPage(page);
const loggedLoginPage = new LoggedLoginPage(loginPage);

await loggedLoginPage.goto();
await loggedLoginPage.login('user', 'password');
```

---

## Why are there no tests for this file?

There are no tests included for this decorator because the purpose of the example is only to show how to apply the Decorator pattern to add logging to an existing page.  
The focus is on the structure and the pattern, not on automated test coverage for this case.

---