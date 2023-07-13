<script lang="ts">
    import { authenticated } from "$lib/stores/stores";
    import { onMount } from 'svelte';
  
    export let data;
  
    function handleMount() {
        if (data.data.authenticated) authenticated.update(()=> data.data.authenticated);
    };

    onMount(() => {
        handleMount();
    });
</script>

  
  
  <div class="container">
    <div class="sidenav">
        <a href="/listings">Listings</a>
        <a href="/venues">Venues</a>
        <a href="/users">Users</a>
    </div>
    <div>
    <slot/>
    </div>
  </div>

  <style>
    .container {
        height: 100%;
    }
    .sidenav {
        height: 100%;
        width: 160px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #eee;
        overflow-x: hidden;
        padding-top: 100px;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
    }
  </style>