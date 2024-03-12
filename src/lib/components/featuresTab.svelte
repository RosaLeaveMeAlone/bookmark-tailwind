<script>
// @ts-nocheck


    import { onMount } from 'svelte';

    import IllustrationTab1 from "$lib/assets/illustration-features-tab-1.svg";
    import IllustrationTab2 from "$lib/assets/illustration-features-tab-2.svg";
    import IllustrationTab3 from "$lib/assets/illustration-features-tab-3.svg";

    let tabs;
    let panels;

    onMount(() => {
        tabs = document.querySelectorAll('.tab');
        panels = document.querySelectorAll('.panel');
    });

    const onTabClick = ({target}) => {

        const targetPanel = target.getAttribute('data-target');

        // Deactivate tabs
        tabs.forEach(tab => tab.children[0].classList.remove('border-b-4', 'border-softRed', 'md:border-b-0'));

        // Hide all panels
        panels.forEach(panel => panel.classList.add('hidden'));

        // Activate clicked tab and panel based on the target
        target.classList.add('border-softRed', 'border-b-4');

        document.getElementById('panels')
            .getElementsByClassName(targetPanel)[0]
            .classList.remove('hidden');

    }   


</script>
<!--
@component
FeaturesTab Component
--> 


<!-- Features Heading -->

<section id="features">
    <div class="container mx-auto mt-16 px-6">
        <h2 class="mb-6 text-4xl font-semibold text-center">
            Features
        </h2>
        <p class="max-w-md mx-auto text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>
    </div>
</section>

<!-- Features Tabs -->
<section id="tabs">
    <!-- Tabs Container -->
    <div class="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div class="bg-tabs"></div>
        <!-- Tabs Flex Container -->
        <div class="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
            <!-- Tab 1 -->
            <div class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-1">
                <div on:click={onTabClick} class="py-5 border-b-4 border-softRed" data-target="panel-1">
                    Simple Bookmarking
                </div>
            </div>
            <!-- Tab 2 -->
            <div class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-2">
                <div on:click={onTabClick} class="py-5" data-target="panel-2">
                    Speedy Searching
                </div>
            </div>
            <!-- Tab 1 -->
            <div class="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab" data-target="panel-3">
                <div on:click={onTabClick} class="py-5" data-target="panel-3">
                    Easy Sharing
                </div>
            </div>
        </div>

        <!-- Tab Panels -->
        <section id="panels" class="container mx-auto">
            <!-- Panel 1 -->
            <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1 animate__animated animate__fadeIn animate__faster">
                <!-- Panel Image -->
                <div class="flex justify-center md:w-1/2">
                    <img src={IllustrationTab1} alt="" class="relative z-10">
                </div>
                <!-- Panel Content -->
                <div class="flex flex-col space-y-8 md:w-1/2">
                    <h3 class="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                        Bookmark in one click
                    </h3>
                    <p class="max-w-md text-center text-grayishBlue md:text-left">
                        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.
                    </p>
                    <div class="mx-auto md:mx-0">
                        <a href="#tab1" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                            More Info
                        </a>
                    </div>
                </div>
            </div>
            <!-- Panel 2 -->
            <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-2 animate__animated animate__fadeIn animate__faster hidden">
                <!-- Panel Image -->
                <div class="flex justify-center md:w-1/2">
                    <img src={IllustrationTab2} alt="" class="relative z-10">
                </div>
                <!-- Panel Content -->
                <div class="flex flex-col space-y-8 md:w-1/2">
                    <h3 class="mt-40 text-3xl font-semibold text-center md:mt-0 md:text-left">
                        Intelligent search
                    </h3>
                    <p class="max-w-md text-center text-grayishBlue md:text-left">
                        Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                    </p>
                    <div class="mx-auto md:mx-0">
                        <a href="#tab1" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                            More Info
                        </a>
                    </div>
                </div>
            </div>
            <!-- Panel 3 -->
            <div class="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-3 animate__animated animate__fadeIn animate__faster hidden">
                <!-- Panel Image -->
                <div class="flex justify-center md:w-1/2">
                    <img src={IllustrationTab3} alt="" class="relative z-10">
                </div>
                <!-- Panel Content -->
                <div class="flex flex-col space-y-8 md:w-1/2">
                    <h3 class="mt-40 text-3xl font-semibold text-center md:mt-0 md:text-left">
                        Share your bookmarks
                    </h3>
                    <p class="max-w-md text-center text-grayishBlue md:text-left">
                        Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                    </p>
                    <div class="mx-auto md:mx-0">
                        <a href="#tab1" class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
                            More Info
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
</section>


<style>
    @screen lg {
        .bg-tabs {
            width: 2000px;
            height: 300px;
            right: 60%;
            @apply absolute rounded-r-full top-60 bg-softBlue;
        }
    }
</style>