<script>
  import { user } from '../../stores/user'
  import { onMount } from 'svelte'
  onMount( async () => {
    const mod = await import('../../firebase/auth.js')
		let auth = mod.default
    auth.signOut()
  })
  user.loggedOut()
</script>

You have been logged out
