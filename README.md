# js-date-library

[School Assignment] JS Library to manipulate dates

# @euripidean/js-date-library

[![npm version](https://img.shields.io/npm/v/@euripidean/js-date-library)](https://www.npmjs.com/package/@euripidean/js-date-library)
![GitHub](https://img.shields.io/github/license/euripidean/js-date-library)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/euripidean/js-date-library)
![GitHub issues](https://img.shields.io/github/issues/euripidean/js-date-library)

## Introduction

`@euripidean/js-date-library` is a JavaScript date manipulation library that provides easy-to-use date formatting and calculation capabilities. It simplifies working with dates in your JavaScript projects.

## Installation

You can install the library using npm:

```bash
npm install @euripidean/js-date-library

```

## Usage

```javascript
const D = require("@euripidean/js-date-library");

// Create a new D instance
const myDate = new D();

// Get the year
console.log(myDate.year); // e.g., 2023

// Format the date
console.log(myDate.format("Y-M-D")); // e.g., 2023-September-2

// Calculate the time elapsed
console.log(myDate.when()); // e.g., Just now
```
