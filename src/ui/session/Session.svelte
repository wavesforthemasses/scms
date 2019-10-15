<script>
	import { onMount } from 'svelte'
  import { user } from '../../stores/user'

	onMount(async () => {
		const mod = await import('../../firebase/auth.js')
		let auth = mod.default
    auth.onAuthStateChanged(u => {
      u ? user.loggedIn(u) : user.loggedOut()
    });
	})
</script>
