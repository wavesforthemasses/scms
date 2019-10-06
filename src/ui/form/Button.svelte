<script>

export let pulse = false
export let label = "Click me";
export let href = false

</script>

<style>
	.btn{
		@apply fill-current text-white inline-block;
	}
	button {
		outline: none;
		cursor: pointer;
	}
	.pulse{
	  overflow:visible;
	  position:relative;
		z-index: 10;
	}
	.pulse::before{
	  content: '';
	  display:block;
	  position:absolute;
	  width:100%;
	  height:100%;
	  top:0;
	  left:0;
	  background-color:inherit;
	  border-radius:inherit;
	  transition:opacity .3s, transform .3s;
	  animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
	  z-index:-1
	}
	@keyframes pulse-animation{
	  0%{
	    opacity:1;
	    transform:scale(1)
	  }
	  50%{
	    opacity:0;
	    transform:scale(1.5)
	  }
	  100%{
	    opacity:0;
	    transform:scale(1.5)
	  }
	}
</style>

{#if href}
	<a href={href}
					class="btn"
					class:pulse
					on:click>
		<slot />
	</a>
{:else}
	<button type="submit"
					class="btn"
					class:pulse
					aria-label={label}
					on:click>
		<slot />
	</button>
{/if}
