<script>
    import Logo from "$lib/assets/logo-bookmark.svg";

</script>

<nav class="container relative mx-auto p-6">
    <!-- Flex Container For Nav Items -->
    <div class="flex items-center justify-between space-x-20 my-6">
        <!-- Logo -->
        <div class="z-30">
            <img src={Logo} alt="Logo" id="logo">
        </div>
        <!-- Menu Items -->
        <div class="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <a href="#features" class="tracking-widest hover:text-softRed">Features</a>
            <a href="#download" class="tracking-widest hover:text-softRed">Download</a>
            <a href="#faq" class="tracking-widest hover:text-softRed">FAQ</a>

            <a href="#login" class="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white">Login</a>

        </div>
    </div>
</nav>