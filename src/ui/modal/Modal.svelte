<script>
  import { Button } from "../../ui/Form"
  import { createEventDispatcher } from 'svelte'
  import {fade, fly} from 'svelte/transition'
  import { path } from '../../stores/global';
  let prevPage = $path

  const changePage = (p) => {
    if(p !== prevPage){
      prevPage = p
      closeMe()
      return true
    }
  }
  $: changePage($path)

	const dispatch = createEventDispatcher();
  export let open = false

  $: if(open) openMe()

  const openMe = () => {
    dispatch("open")
    document.getElementsByTagName('body')[0].classList.add('modal-open');
  }

  const closeMe = () => {
    open = false
    dispatch("close")
    document.getElementsByTagName('body')[0].classList.remove('modal-open');
  }
</script>

<style>
  :global(body.modal-open){
    @apply overflow-hidden;
  }
  .modal-shadow{
    @apply fixed inset-0 w-screen h-screen;
    background: radial-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%);
    z-index: 9998;
  }

  .modal-wrapper{
    @apply fixed flex justify-center items-center inset-0 w-screen h-screen overflow-y-auto;
    z-index: 9997;
  }

  .modal {
    @apply w-10/12 p-4 rounded bg-white text-black;
    background-image: linear-gradient(45deg, #e9e9e9, #f9f9f9);
    z-index: 9999;
    max-height: 90vh;
    box-sizing: content-box;
	}

  .modal .content{
    @apply overflow-auto;
    max-height: inherit;
  }

  .modal :global(h3){
    @apply uppercase text-xl font-black;
  }

  .close-button :global(.btn){
    @apply h-8 w-8 font-head font-bold text-white;
  }

  @screen sm {
		.modal{
			@apply w-1/2;
		}
    .close-button :global(.btn){
      @apply h-16 w-16;
    }
	}
</style>

{#if open}
  <div class="modal-wrapper">
    <div class="modal-shadow" on:click={closeMe} transition:fade={{duration: 500}}>
    </div>
    <div class="modal" transition:fly={{x: -1000, duration: 1000}}>
      <div class="content">
        <slot />
      </div>
      <div class="close-button p-3 absolute top-0 right-0 mr-4 mt-4"  transition:fade={{delay: 1000}}>
        <Button
          w={4}
          h={4}
          label="Close me"
          on:click={closeMe}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
        </Button>
      </div>
    </div>
  </div>
{/if}
