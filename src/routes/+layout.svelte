<script lang="ts">
  import '../app.css';
  import Logo from '$lib/svg/Logo.svelte';
</script>

<nav>
  <span class="logo"><Logo /></span>
</nav>

<main>
  <slot />
</main>

<style>
  .logo {
    font-family: 'Train One';
    font-size: 40px;
  }

  nav {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
    z-index: 5;
    height: 80px;
    display: flex;
    align-items: center;
  }

  main {
    padding-top: 80px;
    height: 100%;
    width: 100%;
    min-height: 40px;
  }
</style>