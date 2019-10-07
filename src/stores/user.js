import { writable, derived } from 'svelte/store';

const userStore = () => {
	const { subscribe, set } = writable(null);

	return {
		subscribe,
		loggedIn: (user) => {
      set(user)
    },
		loggedOut: () => set(null)
	};
}

export const user = userStore()

export const isLoggedIn = derived(
  user,
  $user => !!$user
)
