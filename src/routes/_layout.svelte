<script>
  import Header from '../layout/Header.svelte'
  import Footer from '../layout/Footer.svelte'
</script>

<style>
  main{
    @apply font-body text-black text-base leading-relaxed flex-1 flex relative justify-between flex-col min-h-screen;
  }
  :global(p+p){
    @apply mt-4;
  }
  .loading{
    display: none !important;
  }
  main :global(h1, h2, h3, h4, h5, h6){ @apply font-head; }
  single{
    @apply mb-16 flex-grow;
  }
</style>

<div class="loading" style="display: flex; justify-content: center; align-items: center; background: #47b; color: #fff; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 1000;">
  Attendi...
</div>
<main>
  <Header />
  <single>
    <slot />
  </single>
  <Footer />
</main>
