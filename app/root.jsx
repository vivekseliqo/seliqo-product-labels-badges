import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import './index.css';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@shopify/polaris-web-components@latest/dist/styles.css"
        />

        <script
          type="module"
          src="https://unpkg.com/@shopify/polaris-web-components@latest/dist/polaris-web-components.js"
        ></script>

      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
