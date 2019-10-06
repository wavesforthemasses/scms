# sapper-template

```bash
npx degit "wavesforthemassrs/scms" my-app

cd my-app
npm install # or yarn!
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

HOW TO START

```
/
  /firebase.json (and .firebaserc)
    "projects": {
      "default": "YOUR FIREBASE PROJECT ID"
    },

Terminal
  run:
    firebase login
    firebase init functions hosting
      defaults!
    cd /functions

/
  /package.json
    "name": "YOUR APP NAME",
    "description": "YOUR APP DESCRIPTION",
    "version": "YOUR APP VERSION",

Terminal
  run:
    npm install
    cd ..
    npm install

/functions
  /index.js
    Configure it (mostly nodemailer)

/
  /tailwind.config.json
    Config what you need..you can do it later

/static
  /manifest.json
    "name": "YOUR APP NAME",
    "short_name": "YOUR APP SHORT NAME",
    "start_url": "/",
      If you don't want your app to start with homepage once installed on a smartphone
  logo-192.png + logo-512.png + favicon.png
    your logo

/src
  template.html
    you should put here all the stuff like "Google Fonts" or anyway CDNs needed on all the website
    And fix this...
    <meta name="apple-mobile-web-app-title" content="MY APP NAME">
  	<meta name="application-name" content="MY APP NAME">
  /components
    /Contact.svelte
      fetch('https://*.cloudfunctions.net/sendMail', { <- set the sendMail url
  /routes
```
