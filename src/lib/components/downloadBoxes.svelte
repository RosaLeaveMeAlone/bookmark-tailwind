<script>

    import LogoChrome from '$lib/assets/logo-chrome.svg';
    import LogoFirefox from '$lib/assets/logo-firefox.svg';
    import LogoOpera from '$lib/assets/logo-opera.svg';
    import BgDots from '$lib/assets/bg-dots.svg';
    import { toImageUrl } from '$lib/helpers';

</script>

<!-- Heading -->
<section id="download">
    <div class="container mx-auto px-6">
        <h2 class="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
        </h2>
        <p class="max-w-lg mx-auto text-center text-grayishBlue">
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
    </div>
</section>

<!-- Download Boxes -->
<section id="download-boxes" class="py-32">
    <!-- Boxes Container -->
    <div class="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        <!-- Box 1 -->
        <div class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            <!-- Image -->
            <div class="flex justify-center">
                <img src={LogoChrome} alt="" />
            </div>
            <!-- Text -->
            <h5 class="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p class="text-gray-400">Minimum Version 62</p>
            <!-- Dots -->
            <div class="bg-repeat-x px-6 pt-6 capitalize" style="background-image: {toImageUrl(BgDots)}">
                <a href="#" class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                    Add & Install Extension
                </a>
            </div>
        </div>
        <!-- Box 2 -->
        <div class="w-full md:w-1/3">
            <div class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
                <!-- Image -->
                <div class="flex justify-center">
                    <img src={LogoFirefox} alt="" />
                </div>
                <!-- Text -->
                <h5 class="pt-6 text-xl font-bold">Add to Firefox</h5>
                <p class="text-gray-400">Minimum Version 55</p>
                <!-- Dots -->
                <div class="bg-repeat-x px-6 pt-6 capitalize" style="background-image: {toImageUrl(BgDots)}">
                    <a href="#" class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                        Add & Install Extension
                    </a>
                </div>
            </div>
        </div>
        <!-- Box 3 -->
        <div class="w-full md:w-1/3">
            <div class="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
                <!-- Image -->
                <div class="flex justify-center">
                    <img src={LogoOpera} alt="" />
                </div>
                <!-- Text -->
                <h5 class="pt-6 text-xl font-bold">Add to Opera</h5>
                <p class="text-gray-400">Minimum Version 46</p>
                <!-- Dots -->
                <div class="bg-repeat-x px-6 pt-6 capitalize" style="background-image: {toImageUrl(BgDots)}">
                    <a href="#" class="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                        Add & Install Extension
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>