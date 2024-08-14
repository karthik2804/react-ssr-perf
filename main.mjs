import express from 'express'
import React from "react"
import ReactDOMServer from "react-dom/server";
import App from "./src/client/App.js"

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

const server = express()

server.get('*', (req, res) => {
  let renderedContent = htmlContent.replace(
    '<div id="root"></div>',
    `<div id="root">${ReactDOMServer.renderToString(<App />)}</div >`
  )
  res.set({ "content-type": "text/html" });
  res.send(renderedContent);
})

server.listen(3000, () => {
  console.log('ready')
})