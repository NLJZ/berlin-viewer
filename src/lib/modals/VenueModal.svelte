<script lang="ts">
  import { closeModal } from 'svelte-modals'
  import { onMount } from 'svelte';
  export let isOpen: Boolean;
  export let venueId: String;


</script>

{#if isOpen}
<div role="dialog" class="modal">
  <div class="contents">
    <h1>Venue</h1>
    {venueId}
    <div class="actions">
      <button on:click="{closeModal}">OK</button>
    </div>
  </div>
</div>
{/if}

<style>
  .modal {
    z-index: 7;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* allow click-through to backdrop */
    pointer-events: none;
  }

  .contents {
    min-width: 240px;
    border-radius: 6px;
    padding: 16px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
  }



  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
  }
</style>