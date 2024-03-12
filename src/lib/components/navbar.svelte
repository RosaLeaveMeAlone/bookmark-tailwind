<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import Logo from "$lib/assets/logo-bookmark.svg";
    import LogoBookmarkFooter from '$lib/assets/logo-bookmark-footer.svg';

    let menu;

    let menuOpen = false;

    onMount(() => {
        menu = document.getElementById('menu');
    });

    const toggleMenu = () => {
        menuOpen = !menuOpen;
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    }

</script>

//TODO: Improve menu behavior

<nav class="container relative mx-auto p-6">
    <!-- Flex Container For Nav Items -->
    <div class="flex items-center justify-between my-6">
        <!-- Logo -->
        <div class="z-30">
            <img src={menuOpen ? LogoBookmarkFooter : Logo} alt="Logo" id="logo">
        </div>
        <!-- Menu Items -->
        <div class="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <a href="#features" class="tracking-widest hover:text-softRed">Features</a>
            <a href="#download" class="tracking-widest hover:text-softRed">Download</a>
            <a href="#faq" class="tracking-widest hover:text-softRed">FAQ</a>

            <a href="#login" class="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white">Login</a>

        </div>
        <!-- Hamburger Button -->
        <button id="menu-btn" on:click={toggleMenu} class="z-30 block md:hidden focus:outline-none hamburger" class:open="{ menuOpen }">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
        </button>
        <!-- Hamburger Menu -->
        <div
            id="menu"
            class="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue"
        >
            <div class="w-full py-3 text-center">
                <a href="#features" class="block hover:text-softRed">Features</a>
            </div>
            <div class="w-full py-3 text-center">
                <a href="#download" class="block hover:text-softRed">Download</a>
            </div>
            <div class="w-full py-3 text-center">
                <a href="#faq" class="block hover:text-softRed">FAQ</a>
            </div>
            <div class="w-full py-3 text-center">
                <a href="#" class="block hover:text-softRed">Login</a>
            </div>
        </div>


    </div>
</nav>

<style>
    .hamburger {
        cursor: pointer;
        width: 24px;
        height: 24px;
        transition: all 0.25s;
        position: relative;
    }


    .hamburger-top,
    .hamburger-middle,
    .hamburger-bottom {
        content: '';
        position: absolute;
        width: 24px;
        height: 3px;
        top: 0;
        left: 0;
        background: #000;
        transform: rotate(0);
        transition: all 0.5s;
    }

    .hamburger-middle {
        transform: translateY(7px);
    }

    .hamburger-bottom {
        transform: translateY(14px);
        background: #000;
    }

    .open {
        position: fixed;
        top: 50px;
        right: 25px;
        transform: rotate(90deg);
        transform: translateY(0px);
    }

    .open .hamburger-top {
        transform: rotate(45deg) translateY(6px) translateX(6px);
        background-color: #fff;
    }

    .open .hamburger-middle {
        display: none;
    }

    .open .hamburger-bottom {
        transform: rotate(-45deg) translateY(6px) translateX(-6px);
        background-color: #fff;
    }

</style>