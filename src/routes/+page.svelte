<script lang="ts">
	import Icon from '@iconify/svelte';

	let currentPage = $state(0);

	const page_count = 2;

	let yOffset = $derived(currentPage * -100 + 'vh');

	const onScroll = (e: WheelEvent) => {
		const scroll = e.deltaY;
		scroll > 0 ? movePage(1) : movePage(-1);
	};

	let touchStartY: number | null = null;

	const onTouchstart = (e: TouchEvent) => {
		touchStartY = e.touches[0].clientY;
	};

	const onTouchend = (e: TouchEvent) => {
		if (touchStartY === null) return;

		const touchEndY = e.changedTouches[0].clientY;
		const diffY = touchStartY - touchEndY;

		if (diffY > 50) {
			// Swiped up
			movePage(1);
		} else if (diffY < -50) {
			// Swiped down
			movePage(-1);
		}

		// Reset touch start Y position
		touchStartY = null;
	};

	const movePage = (difference: number) => {
		currentPage = Math.max(0, Math.min(page_count - 1, currentPage + difference));
	};
</script>

<main
	class="overflow-hidden transition-all duration-500"
	style={`transform: translateY(${yOffset});`}
	onwheel={onScroll}
	ontouchstart={onTouchstart}
	ontouchend={onTouchend}
>
	<div id="page-1" class="flex flex-col justify-center items-center h-screen gap-12 relative">
		<h1>&lt;tn0.me/&gt;</h1>
		<div class="flex gap-5">
			<a
				href="https://www.github.com/Timmnn"
				class="hover:text-blue-600 transition-all hover:scale-110"
			>
				<Icon icon="mdi-github" width="75" height="75" />
			</a>
			<a
				href="https://www.linkedin.com/in/timm-nicolaizik/"
				class="hover:text-blue-600 transition-all hover:scale-110"
			>
				<Icon icon="mdi-linkedin" width="80" height="80" />
			</a>
			<a
				href="mailto:timmmmnn@gmail.com"
				class="hover:text-blue-600 transition-all hover:scale-110"
			>
				<Icon icon="material-symbols:mail" width="80" height="80" />
			</a>
		</div>

		<Icon
			icon="ep-arrow-down-bold"
			width="60"
			height="60"
			style="position: absolute; bottom: 10px;"
			class="animate-bounce"
		></Icon>
	</div>
	<div id="page-2">
		<h2>Projects</h2>
		<h3>🚧 WORK IN PROGRESS 🏗️</h3>
	</div>
</main>

<style lang="scss">
	[id*='page-'] {
		@apply flex flex-col justify-center items-center h-screen gap-12;
	}
</style>
