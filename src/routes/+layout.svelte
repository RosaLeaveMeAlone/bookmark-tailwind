<script>
    import "../app.css";
    import { 
      Navbar,
      Footer,
    } from '$lib/components'
  </script>
  
<div class="overflow-x-hidden">
  <Navbar />
  <slot />
  <Footer />
</div>
