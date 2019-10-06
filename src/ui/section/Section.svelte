<script>
  let c = null;
	export { c as class };
  export let id = null;
</script>

<style>
  section{
    @apply mt-10;
  }
  section>.container{
    @apply mx-auto;
  }
  section.small>.container{
    @apply w-10/12;
  }
  @screen md {
    section.small>.container{
      @apply w-2/3;
    }
  }
</style>

<section class={c} {id}>
  <div class="container">
    <slot />
  </div>
</section>
