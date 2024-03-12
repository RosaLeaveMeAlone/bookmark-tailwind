<script>

    import LogoBookmarkFooter from '$lib/assets/logo-bookmark-footer.svg';
    import FacebookIcon from '$lib/assets/icon-facebook.svg';
    import TwitterIcon from '$lib/assets/icon-twitter.svg';

</script>

<footer class="py-16 bg-veryDarkBlue">
    <!-- Footer flex container -->
    <div class="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
        <!-- Logo/Menu Container  -->

        <div class="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
            <img src={LogoBookmarkFooter} alt="" class="mb-1">

            <a href="#features" class="uppercase hover:text-softRed">features</a>
            <a href="#download" class="uppercase hover:text-softRed">Download</a>
            <a href="#faq" class="uppercase hover:text-softRed">FAQ</a>

        </div>

        <!-- Social Container -->
        <div class="flex space-x-10">
            <a href="#">
                <img src={FacebookIcon} alt="" class="h-6 ficon">
            </a>
            <a href="#">
                <img src={TwitterIcon} alt="" class="h-6 ficon">
            </a>
        </div>
    </div>
</footer>

<style>

    .ficon:hover {
        filter: invert(53%) sepia(38%) saturate(3303%) hue-rotate(326deg) brightness(101%) contrast(96%);
    }

</style>