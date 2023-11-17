<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>
	Welcome, {data.username} ({data.userId})!
</h1>

<form method="post" action="/auth/logout">
	<div>
		<button type="submit" class="bg-primary-500 px-4 py-2 rounded text-white">Log out</button>
	</div>
</form>
