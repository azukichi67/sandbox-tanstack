import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Amplify } from "aws-amplify";
import ReactDOM from "react-dom/client";
import { config } from "./lib/cognito/cognit";
import { routeTree } from "./routeTree.gen";

import "./style.css";

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

Amplify.configure(config);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
