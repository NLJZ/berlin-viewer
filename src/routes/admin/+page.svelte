<script lang='ts'>
  import { enhance } from '$app/forms';
  import { onMount } from "svelte";
  import { authenticated } from "$lib/stores/stores";
  import type { PageData, ActionData } from './$types';

  export let data: PageData;
  export let form: ActionData;

  $: data, setAuthenticated;

  const credentials = {
    email: '',
    password: ''
  }

  function setAuthenticated() {
    return authenticated.update((data.data.authenticated));
  };

</script>
{#if $authenticated}

<h1>admin</h1>
{$authenticated}
{:else}
<h1>Login</h1>
  <form method="POST" action="?/login" use:enhance>
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