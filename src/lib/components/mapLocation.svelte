<script>
    import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
    import { onMount } from 'svelte';
     
    onMount(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibXJ4bGMiLCJhIjoiY2xqenN5bGt1MDBndTNtcjFnMDUyY3JwdiJ9.Xq8z_dPcRi_T1fqi9B4d_g';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-81.376378, 28.511922], // starting position [lng, lat]
            zoom: 15, // starting zoom
        });

        map.marker = new mapboxgl.Marker()
            .setLngLat([-81.376378, 28.511922])
            .addTo(map);
    });

</script>


<section id="map-location" class="py-6 lg:px-24">
    <div class="flex flex-col flex-col-reverse mx-auto py-6 lg:space-x-10 lg:px-24 lg:flex-row lg:mb-0">
        <!-- Content -->
        <div class="lg:w-1/2 mt-10 lg:mt-0">
            <h1 class="text-3xl font-semibold text-center lg:text-6xl lg:text-left">Our Location</h1>
            <p class="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mx-0">
                We are located in the heart of the city, close to iconic landmarks and easily accessible. Visit us at our central location, perfect for exploring the city after your visit.
            </p>
            <p class="mt-4 text-center lg:text-left">
                Need help finding us? Contact us for detailed directions.
            </p>
            <p class="mt-4 text-center lg:text-left">
                Call us at <a href="tel:+123456789" class="text-blue-600 hover:underline"><i class="fas fa-phone-alt"></i> +123 456 789</a>
            </p>
        </div>

        <!-- Map -->
        <div class="relative w-full lg:w-1/2 h-96">
            <div id='map' style='width: 400px; height: 300px;'></div>
        </div>
    </div>
</section>
