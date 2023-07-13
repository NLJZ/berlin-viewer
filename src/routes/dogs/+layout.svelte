<script>
  import '../../app.css';
  import { authenticated } from "$lib/stores/stores";
  import { onMount } from 'svelte';


  export let data;

  function handleMount() {
    console.log('mounted');
    console.log(data);
    return;
    // if (data.data.authenticated) authenticated.update(()=> data.data.authenticated);
  }


onMount(() => {
  handleMount();
});
</script>


<div>
  {$authenticated}
  <slot/>
</div>