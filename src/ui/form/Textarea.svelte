<script>
  export let name;
  export let label = false;
  export let hint = false;
  export let placeholder = "";
	export let value = "";
</script>

<style>
  .textarea-field{
    @apply w-full;
  }

  label{
    @apply block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2;
  }

  label.active{
      @apply text-primary;
  }

  textarea{
    @apply appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight h-16;
  }

  .hint{
    @apply text-gray-600 text-xs italic mb-3;
  }
</style>

<div class="textarea-field">
  {#if label}
		<label
			for={name}
      class:active={value.length > 0}
		>{label}</label>
	{/if}

	<textarea
		id={name}
		name={name}
    class="focus:outline-none focus:bg-white focus:border-gray-500 cursor-text"
    placeholder={placeholder}
    on:input={(e) => {
      value = e.target.value
    }}
	>{value}</textarea>

  {#if hint}
		<p class="hint">{hint}</p>
	{/if}

  <slot />
</div>
