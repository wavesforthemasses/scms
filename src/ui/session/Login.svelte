<script>
	import { onMount } from 'svelte'
  import { user } from '../../stores/user'
	import { Form, Input, Button } from '../Form'
  let auth
	let sending = false
	let sent = false
	let success = false

  const login = async (e) => {
		sending = true
    let promise = auth.signInWithEmailAndPassword(e.detail.email, e.detail.password)

    promise
      .then(data => {
				//console.log('finished logging in:', data)
				sending = false
				sent = true
				success = true
			})
      .catch(e => {
				//console.error(e)
				sending = false
				sent = true
				success = false
			})

    return promise;
  }

	onMount(async () => {
		const mod = await import('../../firebase/auth.js')
	  auth = mod.default
	})
</script>

<style>
	.login{
		@apply p-6 w-full;
	}
	.login :global(form){
		@apply w-full max-w-lg;
	}
	.login :global(input), .login :global(textarea){
		@apply relative appearance-none block w-full bg-gray-400 text-black rounded py-3 px-4 mb-3 leading-tight;
	}
	.login :global(.btn){
		@apply bg-secondary mt-6 h-16 w-16 rounded-full uppercase font-body font-bold mx-auto block;
	}
	.login :global(.btn:hover){
		@apply bg-primary;
	}
	.tryagain{
		@apply text-primary font-black cursor-pointer;
	}
</style>

{#if success}
	You logged in successfully!
	<br />Now you can close this box and navigate to the website.
{:else}
	{#if sent}
		Your email or password are incorrect, <span class="tryagain" on:click={() => sent = false}>try again</span>
	{:else}
		{#if sending}
			Process started...
		{:else}
			<div class="login">
				<Form on:save={login}>
					<Input name="email" label="E-Mail" />
					<Input name="password" label="Password" type="password" />
					<Button>Log In</Button>
				</Form>
			</div>
		{/if}
	{/if}
{/if}
