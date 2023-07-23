<script lang="ts">
  import type { Listing } from "$lib/types/types";
  export let listing: Listing;

  const lineOne = (): String => {
    let string = "";
    if (listing.director?.length > 0) {
      string += `${listing.director.join(", ")} / `;
    }
    if (listing.country) {
      string += `${listing.country} / `;
    }
    if (listing.year) {
      string += `${listing.year}`;
    }
    return string;
  };

  const lineTwo = (): String => {
    let string = "";
    if (listing.format) {
      string += `${listing.format} `;
    }
    if (listing.format && listing.runtime) {
      string += '/ '
    }
    if (listing.runtime) {
      string += `${listing.runtime} `;
    }
    return string;
  }

  const lineThree = (): String => {
    let string = "";
    if (listing.subs) {
      string += `Subtitles: ${listing.subs.join(", ")} `;
    }
    return "";
  }
</script>

<div>
  <h2>{listing.title}</h2>
  <ul>
    <li>{lineOne()}</li>
    <li>{lineTwo()}</li>
    <li>{lineThree()}</li>
  </ul>
</div>

<style>
  div {
    max-width: 500px;
  }
</style>
