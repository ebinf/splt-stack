<script lang="ts">
	import { enhance } from '$app/forms';
	import { PUBLIC_REGISTRATION_ENABLED } from '$env/static/public';
	import { page } from '$app/stores';

	export let form;

	const loggedout = $page.url.searchParams.has('loggedout');
	const registered = $page.url.searchParams.has('registered');
</script>

<h1 class="font-bold text-3xl mb-4">Login</h1>

{#if form?.message}
	<p class="mb-4 bg-red-500 text-white px-4 py-2 rounded font-semibold">{form.message}</p>
{/if}

{#if loggedout}
	<p class="mb-4 bg-green-500 text-white px-4 py-2 rounded font-semibold">
		You have successfully logged out!
	</p>
{/if}

{#if registered}
	<p class="mb-4 bg-green-500 text-white px-4 py-2 rounded font-semibold">
		Your account has been registered successfully!
	</p>
{/if}

<form method="post" use:enhance>
	<div class="mb-6">
		<label for="username" class="block">Username</label>
		<input
			type="text"
			name="username"
			id="username"
			required
			class="rounded bg-gray-50 border-gray-400 w-full focus:ring-2 focus:ring-primary-500"
		/>
	</div>
	<div class="mb-6">
		<label for="password" class="block">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			required
			class="rounded bg-gray-50 border-gray-400 w-full focus:ring-2 focus:ring-primary-500"
		/>
	</div>
	<div>
		<button type="submit" class="bg-primary-500 px-4 py-2 rounded text-white">Login</button>
		{#if PUBLIC_REGISTRATION_ENABLED === 'true'}
			or
			<a href="/auth/register" class="text-primary-500 font-semibold">Register</a>
		{/if}
	</div>
</form>
