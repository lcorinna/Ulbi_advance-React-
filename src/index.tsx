import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import App from "app/App";

import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBaundary";

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container is missing in index.html!');
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
