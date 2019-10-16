<script>
  import {Carousel, Slide} from '../ui/Carousel'
  import {Section} from '../ui/Section'
</script>

<style>

</style>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
  <meta property="og:image" content="/logo-512.png" />
</svelte:head>

<Carousel>
  <Slide overlay={true}>
    <h1>Home</h1>
  </Slide>
</Carousel>

<Section>
  <h2>IMPORTANT</h2>
  <ol>
    <li>
      <strong>open /env.js</strong>
      <p>Set all the variables</p>
    </li>
    <li>
      <strong>open /firebase.json and /.firebaserc</strong>
      <p>Set the firebase project id</p>
      <pre>
        "projects": &#x7B;
          "default": "YOUR FIREBASE PROJECT ID"
        &#x7D;
      </pre>
    </li>
    <li>
      <strong>open /package.json</strong>
      <p>Set you the app info</p>
      <pre>
        "name": "YOUR APP NAME",
        "description": "YOUR APP DESCRIPTION",
        "version": "YOUR APP VERSION",
      </pre>
    </li>
    <li>
      <strong>open the Terminal</strong>
      <p>Run the following commands</p>
      <pre>
        firebase login
        firebase init functions hosting
      </pre>
      <p>The answers are usually the default ones</p>
      <pre>
        rm /static/index.html
        cd /functions
        npm install
      </pre>
    </li>
  </ol>
  <h2>CSS (TailwindCss)</h2>
  <ol>
    <li>
      <strong>open /tailwind.config.json</strong>
      <p>Config what you need..</p>
    </li>
  </ol>
  <h2>STATIC FILES</h2>
  <ol>
    <li>
      <strong>go to /static folder</strong>
      <p>Update these files with your logo: logo-192.png + logo-512.png + favicon.png</p>
    </li>
    <li>
      <strong>open /static/manifest.json</strong>
      <p>Update these info</p>
      <pre>
        "name": "YOUR APP NAME",
        "short_name": "YOUR APP SHORT NAME",
        "start_url": "/",
      </pre>
    </li>
  </ol>
  <h2>TEMPLATE</h2>
  <ol>
    <li>
      <strong>open /src/template.html</strong>
      <p>You should put here all the stuff like "Google Fonts" or anyway CDNs needed on all the website. Fix also the following lines:</p>
      <pre>
        <meta name="apple-mobile-web-app-title" content="MY APP NAME">
        <meta name="application-name" content="MY APP NAME">
      </pre>
    </li>
  </ol>
</Section>
