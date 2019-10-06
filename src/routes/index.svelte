<script>
  import {Carousel, Slide} from '../ui/Carousel'
  import {Section} from '../ui/Section'
</script>

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
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Section>
