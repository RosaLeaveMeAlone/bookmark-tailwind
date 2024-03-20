<script>
// @ts-nocheck

	import { 
		Contact,
		DownloadBoxes,
		FAB,
		FAQ,
		FeaturesTab,
		Hero,
		MapLocation,
		Newsletter,
		} from '$lib/components'
</script>

<svelte:head>
	<title>Bookmark App</title>
</svelte:head>
<Hero />
<FeaturesTab />
<DownloadBoxes />
<FAQ />
{#await import("$lib/components/mapLocation.svelte") then Map}
	<Map />
{/await}
<MapLocation />
<!-- <Newsletter /> -->
<Contact />
<FAB />