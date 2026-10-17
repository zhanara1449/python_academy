# Python Academy — Python editor and learning assistant

The online editor uses Pyodide 0.27.7 loaded from jsDelivr on first run. Internet access is required for loading. It executes Python in an isolated Web Worker with a 12-second timeout; do not treat this as a secure sandbox for hostile code. stdin is supplied line by line from the input box. No backend or user account is required. To avoid browser restrictions with local file URLs, deploy on Netlify or use `python -m http.server 8000` and open http://localhost:8000.

The assistant is a **local rule-based educational helper**, not a generative AI service. It explains frequent Python errors and concepts in Kazakh, Russian and English. A real AI integration would require a secure server-side endpoint and API key kept off the frontend. Do not put secret keys in JavaScript.

The original lessons, exercises, school emblem, olympiad problems and inclusive learning activities are preserved. Each grade/lesson has a separate code draft stored in localStorage.
