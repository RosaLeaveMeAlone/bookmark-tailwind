<script>

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
{#await import('$lib/components/mapLocation.svelte') then c}
	<svelte:component this={c.default}/>
{/await}
<!-- <MapLocation /> -->
<!-- <Newsletter /> -->
{#await import('$lib/components/contact.svelte') then c}
	<svelte:component this={c.default}/>
{/await}
<!-- <Contact /> -->
<FAB />