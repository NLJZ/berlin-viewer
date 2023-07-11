<script lang='ts'>
  import { enhance } from '$app/forms';
  import { onMount } from "svelte";
  import { authenticated } from "$lib/stores/stores";
  import type { PageData } from './$types';

  export let data: PageData;

  $: data, setAuthenticated;

  async function setAuthenticated() {
    return  data && data.data && data.data.authenticated ? authenticated.update(()=> data.data.authenticated) : null;
  };

  onMount(() => {
    setAuthenticated()	
  });

</script>
{#if $authenticated}
<form method="POST" action="?/logout"><button formaction="?/logout">Logout</button></form>
<h1>admin</h1>
{:else}
<h1>Login</h1>
  <form method="POST" action="?/login">
    <input autocomplete="username" name="email" type="email" required placeholder="email" />
    <input autocomplete="current-password" name="password" type="password" required placeholder="password" />
    <button formaction="?/login">Login</button>
  </form>
{/if}

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 20px auto;
  }
  input {
    margin-bottom: 20px;
  }
  h1 {
    text-align: center;
  }
</style>