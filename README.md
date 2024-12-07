# Playwright Test Automation Framework - TypeScript & JavaScript

This repository contains a robust test automation framework built with Playwright and TypeScript, designed for efficient and reliable web application and API testing.

## Features

- Cross-browser testing support (Chromium, Firefox, and WebKit)
- API testing support for both standalone and comprehensive end-to-end testing
- TypeScript for enhanced code quality and maintainability
- Page Object Model (POM) implementation for modular test design
- Customized utilities for common testing operations
- Integrated logging for improved debugging
- Continuous Integration (CI) ready
- Docker containerization support
- ESLint integration for code linting and quality assurance

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/acikgozmehmet/pw-automation.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pw-automation
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Project Structure

```
├── tests/
│   ├── e2e/
│   └── api/
├── pages/
├── utils/
├── .auth/
├── .env
├── playwright.config.ts
├── eslint.config.mjs
├── Dockerfile
├── docker-compose.yaml
└── package.json
```

## Running Tests

To run all tests:

```bash
npx playwright test --headed
```

To run specific test suites:

```bash
npx playwright test:tag --headed
```

## Configuration

Modify `playwright.config.ts` to adjust browser settings, timeouts, and other Playwright-specific configurations.

## Best Practices

- Keep tests independent and atomic
- Use descriptive test and function names
- Implement proper error handling and logging
- Regularly update dependencies
