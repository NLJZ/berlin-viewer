<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import ListingComp from "$lib/components/ListingComp.svelte";
  import { openModal } from 'svelte-modals'
  import ListingModal from '$lib/modals/ListingModal.svelte';
  import type { Listing } from '$lib/types/types';


  function openListingModal(listing: Listing) {
    openModal(ListingModal, { listing })
  };
    
  export let data: PageData;

  async function deleteListing(listingId: string) {
    const res = await fetch("http://localhost:4000/listings/delete", {
      method: "DELETE",
      mode: "cors",
      headers: { "content-type": "application/json", Authentication: `${data.token}` },
      body: JSON.stringify({ listingId: listingId }),
    });
    return res;
  }

  async function handleDelete(listingId: string) {
    const handled = await deleteListing(listingId);
    return handled;
  }

  onMount(() => {
    console.log(data);
  });

</script>

<h1>Listings</h1>

{#each data.data as listing}
  <div class="listing-holder"><ListingComp listing={listing} /> <div class="buttons"><button on:click={()=> openListingModal(listing)}>Edit</button> <button on:click={()=> {handleDelete(listing.id)}}>Delete</button></div></div>
{/each}

<style>

  .listing-holder {
    border: 1px solid #444;
    margin-bottom: 40px;
    padding: 20px;
    max-width: 700px;
    width: 100%;
    justify-content: space-between;
  }

  .listing-holder, .buttons {
    display: flex;
    align-items: center;
  }

  .buttons {
    margin-left: 40px;
  }

  button {
    border: 1px solid black;
    margin-right: 8px;
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>