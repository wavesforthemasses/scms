<script>
  import { elasticOut } from 'svelte/easing';
  import { getContext, onMount } from 'svelte';
  import { TheCarousel } from './../Carousel.js';
  import { onVisible } from '../../utils/visible'
  import { lazy } from '../../utils/images'

  export let bkg = null
  export let isFixed = false
  export let overlay = false
  export let overlayON = 'load'
  let overlayShow = false

  const { registerSlide, activeSlide } = getContext(TheCarousel);
  const id = registerSlide();

  let classes = ['carousel-slide']

  if(isFixed) classes = [...classes, 'fixed']
  classes = classes.join(" ")

  const slide = (node, {
    delay = 0,
  	duration = 400 }) => {
    node.classList.remove('overlay-active')
    overlayShow = false
    const o = +getComputedStyle(node).opacity;

  	return {
  		delay,
  		duration,
  		css: t => `opacity: ${t * o}`
  	};
	}

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  onMount(async () => {
    if($activeSlide === id && overlayON == 'load') overlayShow = true
  })

  const overlayOnVisible = (status, node) => {
    if(overlayON == 'visible') overlayShow = status
  }

</script>

<style>
  .carousel-slide{ @apply h-full w-full absolute bg-no-repeat bg-center bg-cover shadow-carousel; }
  .carousel-slide .inner{ @apply text-white inset-0 absolute flex flex-col justify-center items-center text-center; }
  .carousel-slide :global(h1){ @apply font-black text-2xl; }
  .carousel-slide :global(h2){ @apply font-black text-2xl; }
  .carousel-slide :global(h3){ @apply w-11/12 text-center; }
  .carousel-slide :global(.description){ @apply text-base text-center; }
  .overlay{
    @apply bg-primary inset-0 absolute opacity-0;
    clip-path: circle(0% at 90% 20%);
    transition: clip-path .5s, opacity .5s ease-in-out;
  }
  .overlay-active .overlay{
    @apply opacity-75;
    clip-path: circle(100%);
    transition: clip-path .5s .5s, all .5s ease-in-out;
  }
  .inner{
    @apply opacity-0;
    transition: all .5s .25s ease-in-out;
  }
  .overlay-active .inner{
    @apply opacity-100;
  }
  @screen md {
    .carousel-slide :global(h1){ @apply text-4xl; }
    .carousel-slide :global(h2){ @apply text-4xl; }
    .carousel-slide :global(h3){ @apply w-1/2; }
    .fixed{ /*@apply bg-fixed;*/ }
  }
</style>

{#if $activeSlide === id}
  <div
    class={classes}
    class:overlay-active={overlayShow}
    use:onVisible={{cb: overlayOnVisible}}
    use:lazy="{{src: bkg}}"
    on:mouseover={() => { if(overlayON == 'hover') overlayShow = true }}
    on:mouseout={() => { if(overlayON == 'hover') overlayShow = false }}
    in:slide|local={{duration: 1000}}
    out:slide|local={{duration: 1000}}
    on:introend={() => overlayShow = true}>
    {#if overlay}
      <div class="overlay"></div>
    {/if}
    <div class="inner">
      <slot />
    </div>
  </div>
{/if}
