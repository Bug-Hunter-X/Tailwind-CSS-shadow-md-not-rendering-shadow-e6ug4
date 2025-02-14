# Tailwind CSS shadow-md issue

This repository demonstrates a bug where the `shadow-md` utility class in Tailwind CSS fails to render a shadow, despite other classes functioning correctly.  The problem occurs in the `SomeComponent.js` file.

## Setup

To reproduce the issue, clone this repository and run:

```bash
npm install
npm run dev
```

This will start a development server.  Inspect the rendered component in your browser. You should see that the component lacks the expected shadow.

## Solution

The solution can be found in the `solution.js` file.