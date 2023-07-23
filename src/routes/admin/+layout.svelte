<script lang="ts">
    import { Modals, closeModal } from 'svelte-modals'
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
    <slot/>
    <Modals>
      <div
        slot="backdrop"
        class="backdrop"
        on:click={closeModal}
        on:keydown={closeModal}
        role="button"
        tabindex="0"
      />
    </Modals>
  </div>



  <style>
    .container {
        height: 100%;
        padding: 20px;
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

  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.50);
    z-index: 6;
  }
  </style>