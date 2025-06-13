# Playwright Avanzado

## Overview

**Playwright Avanzado** is a demonstration project for advanced end-to-end (E2E) test automation using [Playwright](https://playwright.dev/) with TypeScript. The project showcases best practices for scalable and maintainable test automation, including the use of design patterns such as **Page Object Model (POM)**, **Facade**, **Factory** for test data generation, and **Decorator** for extending functionality.

The goal is to provide a robust structure for SDET/QA engineers to write clean, reusable, and business-oriented automated tests for web applications.

---

## Project Structure

```
src/
  facades/         # Facade pattern for business-level actions
  factories/       # Factory pattern for test data generation
  page-object/     # Page Object Model for UI abstraction
  decorators/      # Decorator pattern for extending or logging functionality
  types/           # Shared TypeScript types/interfaces
```

---

## Key Features

- **Page Object Model (POM):** Encapsulates UI interactions for each page/component.
- **Facade Pattern:** Exposes high-level business actions by orchestrating multiple page objects.
- **Factory Pattern:** Centralizes and standardizes test data creation (e.g., users, products).
- **Decorator Pattern:** Dynamically adds functionality (such as logging) to page objects without modifying their structure.
- **TypeScript:** Ensures type safety and code clarity.
- **Playwright Test Runner:** Enables powerful, reliable browser automation.

---

## Dependencies

- [Playwright](https://playwright.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [@playwright/test](https://playwright.dev/docs/test-intro)  
- (Optional) Additional libraries for assertions, linting, or reporting as needed.

Install dependencies with:

```bash
npm install
```

---

## How to Run Tests

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run all tests:**
   ```bash
   npx playwright test
   ```

3. **Open Playwright Test Report:**
   ```bash
   npx playwright show-report
   ```

---

## Usage

- **Test Data:** Use factories in `src/factories/` to generate users and products for your tests.
- **Business Flows:** Use facades in `src/facades/` to perform high-level actions (e.g., login, add to cart).
- **UI Interactions:** Use page objects in `src/page-object/` for low-level UI operations.
- **Logging/Extension:** Use decorators in `src/decorators/` to add logging or other cross-cutting concerns to your page objects.

---

## Author

lleirgarcia@gmail.com

---

## License

This project is for educational and demonstration purposes.