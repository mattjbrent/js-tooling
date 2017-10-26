import { html } from 'common-tags'

const app = title =>
	html`<!doctype html>
	<html lang="en">
	  <head>
			<meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"/>
			<meta charset="UTF-8">
			<title>${title}</title>
			<link rel="stylesheet" href="css/style.css">
	  </head>
	  <body>
		  <div id="app-container"></div>
	  </body>
  </html>`

export default app
