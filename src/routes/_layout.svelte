<script>
  import Header from '../layout/Header.svelte'
  import Footer from '../layout/Footer.svelte'
  import { Session } from '../ui/Session'
</script>

<style>
  main{
    @apply font-body text-black text-base leading-relaxed flex-1 flex relative justify-between flex-col min-h-screen w-screen;
  }
  .loading{
    @apply hidden;
  }
  :global(p+p){
    @apply mt-4;
  }
  main :global(h1, h2, h3, h4, h5, h6){ @apply font-head; }
  single{
    @apply mb-16 flex-grow;
  }
</style>

<main>
  <Header />
  <single>
    <Session />
    <slot />
  </single>
  <Footer />
</main>
<div class="loading" style="top:0;right:0;left:0;bottom:0;z-index:9999;background-color:#fff;background-image: url('loading.gif');background-size: 1.5rem;background-repeat:no-repeat;background-position:center;position:absolute;"></div>
