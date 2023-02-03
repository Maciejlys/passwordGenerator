<div class="content">
	<slot />
</div>

<style>
	:root {
		--green: rgb(164, 254, 173);
		--grey: #e5e4e8;
		--dark-grey: #18171f;
		--light-grey: #24232b;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Courier New', Courier, monospace;
		background-color: #0d0c12;
		color: white;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100dh;
		min-height: 100vh;
		max-width: 800px;
		margin: 0 auto;
	}
</style>
