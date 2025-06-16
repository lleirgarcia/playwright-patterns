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

cucumber/
  features/        # Cucumber feature files (Gherkin syntax)
  steps/           # Step definitions for Cucumber
```

---

## Key Features

- **Page Object Model (POM):** Encapsulates UI interactions for each page/component.
- **Facade Pattern:** Exposes high-level business actions by orchestrating multiple page objects.
- **Factory Pattern:** Centralizes and standardizes test data creation (e.g., users, products).
- **Decorator Pattern:** Dynamically adds functionality (such as logging) to page objects without modifying their structure.
- **TypeScript:** Ensures type safety and code clarity.
- **Playwright Test Runner:** Enables powerful, reliable browser automation.
- **Docker Compose:** Enables running the test suite in a containerized environment for consistency and CI/CD integration.

---

## Dependencies

- [Playwright](https://playwright.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Allure Commandline](https://docs.qameta.io/allure/) (for advanced reporting)  
- [Cucumber](https://cucumber.io/) (for BDD-style tests, if used)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) (for containerized execution)
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
   npm run test
   ```

3. **Generate Playwright Test Report with Allure Reports (Local Usage):**
   ```bash
   npm run report:playwright
   ```

4. **Open in Browser Playwright Allure Test Report:**
   ```bash
   npm run report:playwright:open
   ```

---

## Docker Compose Execution

You can run the entire test suite inside a Docker container using Docker Compose. This ensures a consistent environment across all machines and is ideal for CI/CD pipelines.

### How to Use

1. **Build and run the tests using Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **(Optional) Run tests in the background:**
   ```bash
   docker-compose up -d
   ```

3. **Stop the containers:**
   ```bash
   docker-compose down
   ```

### What does Docker Compose do here?

- Builds a Docker image with all dependencies (Node.js, Playwright, browsers, etc.).
- Runs your test suite in an isolated, reproducible environment.
- Useful for local development, team collaboration, and CI/CD integration.

> **Note:**  
> Make sure you have Docker and Docker Compose installed on your machine.  
> Review the `docker-compose.yml` file for service configuration and customization.

---

## Usage

- **Test Data:** Use factories in `src/factories/` to generate users and products for your tests.
- **Business Flows:** Use facades in `src/facades/` to perform high-level actions (e.g., login, add to cart).
- **UI Interactions:** Use page objects in `src/page-object/` for low-level UI operations.
- **Logging/Extension:** Use