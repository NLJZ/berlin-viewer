<script lang="ts">
  import { closeModal } from 'svelte-modals'
  import { onMount } from 'svelte';
  import type { FormListing } from '$lib/types/formTypes';
  import type { Listing } from '$lib/types/types';

  export let isOpen: Boolean;
  export let listing: Listing;

  let listingData: FormListing = {
    type: null,
    title: null,
	  country: null,
    year: null,
	  format: null,
    runtime: null,
    language: [],
    subs: [],
    seriesId: null,
    director: [],
    artist: [],
    cast: [],
    venueId: null,
  };

  onMount(async () => {
    console.log(listing, "the listing");
  });


</script>

{#if isOpen}
<div role="dialog" class="modal">
  <div class="contents">
    <h1>Listing</h1>
    {listing.id}
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