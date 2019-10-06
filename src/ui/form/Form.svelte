<script>
	import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
	function handleSubmit(event) {
		event.preventDefault();

		const fd = new FormData(this);
		const data = {};
		for (const [key, value] of fd) {
			data[key] = value;
		}

		dispatch('save', data);
	}
</script>

<style>
	form{
		@apply w-full max-w-lg mx-auto;
	}
</style>

<form on:submit={handleSubmit}>
	<slot/>
</form>
