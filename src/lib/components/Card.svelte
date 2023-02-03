<script lang="ts">
	export let dark: boolean = false;
	$: bgColor = dark ? '#18171f' : '#24232b';
</script>

<div class="container" style:background-color={bgColor}>
	<slot />
</div>

<style>
	.container {
		padding: 1.25rem 1.5rem;
		display: grid;
		gap: 1rem;
	}
</style>
