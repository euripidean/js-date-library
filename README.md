# js-date-library

[School Assignment] JS Library to manipulate dates

# @euripidean/js-date-library

[![npm version](https://img.shields.io/npm/v/@euripidean/js-date-library)](https://www.npmjs.com/package/@euripidean/js-date-library)
[![npm downloads](https://img.shields.io/npm/dt/@euripidean/js-date-library)](https://www.npmjs.com/package/@euripidean/js-date-library)
[![GitHub license](https://img.shields.io/github/license/yourusername/js-date-library)](https://github.com/yourusername/js-date-library/blob/main/LICENSE)

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
