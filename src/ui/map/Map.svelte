<script>
  import { onMount } from 'svelte';
  import { onVisible } from '../../utils/visible'
  export let address = ""
  let loadMe = false
  let src = null
  let f
  let loaded = false
  onMount(() => {
    f.onload = () => loaded = true
  })
  $: if(loadMe && address) src = `https://maps.google.com/maps?width=1920&height=400&hl=it&q=${encodeURI(address)}&ie=UTF8&t=&z=16&iwloc=B&output=embed`
</script>

<style>
  .map{
    @apply relative w-full bg-gray-200 bg-center bg-no-repeat;
  }
  .loading{
    @apply inset-0 absolute z-40 text-black block text-center;
  }
  iframe{
    @apply w-full h-64 border-0 overflow-hidden m-0;
    pointer-events:none;
    -webkit-filter: grayscale(100%);
       -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
         -o-filter: grayscale(100%);
            filter: grayscale(100%);
  }
</style>
<div class="map" use:onVisible={{start: 'start', cb: () => loadMe = true}} style={`background-image: url('loading.gif'); background-size: 1.5rem;`}>
  <iframe {src} title="Il nostro indirizzo è Via Marchese di Villabianca 70, Palermo - Italia" bind:this={f}></iframe>
</div>
