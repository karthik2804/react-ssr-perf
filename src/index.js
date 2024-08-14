import React from "react"
import ReactDOMServer from "react-dom/server";
import App from "./client/App.js"

let htmlContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>SSR App</title>
  </head>

  <body>
    <div id="root"></div>
    <script src="/static/bundle.js"></script>
  </body>
</html>
`

export async function handler(req, res) {

  let renderedContent = htmlContent.replace(
    '<div id="root"></div>',
    `<div id="root">${ReactDOMServer.renderToString(<App />)}</div > `
  )
  res.set({ "content-type": "text/html" });
  res.send(renderedContent);
}
