<script>
  import { fade } from 'svelte/transition';
  import { menu } from '../stores/global';
  import { isLoggedIn } from '../stores/user'
  import Contact from '../components/Contact.svelte';
  import { stores } from '@sapper/app';
  const { page } = stores();

  $: if($page.path) menu.close()

</script>

<div
  class="sidenav"
  class:sidenav-open={$menu.main == "contacts"}>
  <div class="sidenav-close-button" aria-label="Close" on:click={menu.close}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
  </div>
  <div class="sidenav-inner">
    <Contact />
  </div>
  <div
    class="nav-shadow"
    on:click={menu.close}></div>
</div>

<div class="menulinks" class:open={$menu.main == "nav"} class:close={$menu.main != "nav"}>
  <div class="layer">
  {#if $menu.main == "nav"}
    <div class="sidenav-close-button" aria-label="Close" on:click={menu.close}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </div>
    <ul class="links" in:fade={{delay: 300}}>
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About</a></li>
      {#if $isLoggedIn}
        <li on:click={() => menu.open('logout')}><span>Logout</span></li>
      {:else}
        <li on:click={() => menu.open('login')}><span>Login</span></li>
      {/if}
    </ul>
  {/if}
  </div>
  {#if $menu.main != "nav"}
    <div class="circleBTN" in:fade={{delay: 500}} aria-label="Open Menu" on:click={() => menu.open('nav')}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </div>
  {:else}
    <div
      class="circle-shadow"
      in:fade={{delay: 100}}
      on:click={menu.close}></div>
  {/if}
</div>

<style>
  .sidenav{ @apply text-black bg-white inset-y-0 left-0 overflow-x-hidden overflow-y-auto fixed z-50; }
  .sidenav{
    max-width: 0px;
    transition: max-width 0.5s ease-in-out;
    background-image: linear-gradient(45deg, #e9e9e9, #f9f9f9);
  }
  .sidenav-close-button{
    @apply p-3 absolute top-0 right-0;
  }
  .sidenav-open{
    max-width: 100vw;
    transition: max-width 0.5s ease-in-out;
  }
  .sidenav-inner{
    @apply flex justify-center items-center h-screen p-4 w-screen opacity-0;
    transition: all 0.5s ease-in-out;
  }
  .sidenav-open .sidenav-inner{
    @apply opacity-100 ml-0;
    transition: all 0.5s ease-in-out;
  }
  .nav-shadow{
    @apply opacity-0 fixed inset-0 w-0 h-0 z-40;
    background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0) inset;
    transition: opacity 0.5s ease-in-out, width 0s 1s, height 0s 1s, left 0.5s ease-in-out, box-shadow 0.5s 0.5s ease-in-out;
  }
  .sidenav-open .nav-shadow{
    @apply opacity-100 w-full h-full min-h-screen;
    box-shadow: 3px 0px 25px rgba(0, 0, 0, 0.15) inset;
    left: 100vw;
    transition: opacity 0.5s 0.5s ease-in-out, left 0s ease-in-out, box-shadow 0.5s 1s ease-in-out;
  }

  svg{
    @apply h-6 w-6;
  }

  .menulinks .circleBTN{
    @apply flex h-full bg-secondary text-white cursor-pointer m-4 rounded-full p-3;
  }
  .menulinks .circleBTN svg{
    @apply fill-current;
  }
  .menulinks{
    @apply block fixed bottom-0 right-0;
  }

  .menulinks .layer{
    @apply block fixed bottom-0 right-0 bg-secondary text-white z-50;
    height: 0px;
    width: 0px;
    transition: all 0.5s 0s ease-in-out, margin 0.5s 0.5s, border-radius 0.5s 1s;
  }

  .menulinks.open{
    @apply inset-0;
  }

  .menulinks.open .layer{
    @apply p-4;
    border-top-left-radius: 9999px;
    transition: all 0.5s 0.05s ease-in-out, margin 0.05s 0s, border-radius 0.05s 0s;
  }

  .circle-shadow{
    @apply opacity-100 w-full h-full min-h-screen;
    background-image: radial-gradient(circle at bottom right, #000, #0006);
    transition: all 0.5s 1s ease-in-out;
  }

  .menulinks ul{
    @apply bottom-0 right-0 text-right absolute m-4;
  }

  .menulinks li{
    @apply text-xl;
  }

  @screen portrait {
    .menulinks.open .layer{
      height: 60vh;
      width: 100vw;
    }
  }

  @screen landscape {
    .menulinks.open .layer{
      height: 100vh;
      width: 60vw;
    }
  }

  @screen md {
    .menulinks {
      @apply hidden;
    }
    .sidenav-open{ max-width: 50vw; }
    .sidenav-inner{
      width: 50vw;
      margin-left: -50vw;
    }
    .sidenav-open .nav-shadow{ left: 50vw; }
  }
  @screen lg {
    .sidenav-open{ max-width: 35vw; }
    .sidenav-inner{
      width: 35vw;
      margin-left: -35vw;
    }
    .sidenav-open .nav-shadow{ left: 35vw; }
  }
  @screen xl {
    .sidenav-open{ max-width: 25vw; }
    .sidenav-inner{
      width: 25vw;
      margin-left: -25vw;
    }
    .sidenav-open .nav-shadow{ left: 25vw; }
  }
</style>
