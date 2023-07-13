<script lang='ts'>
</script>

<h1>Log in</h1>
  <form method="POST" action="?/login">
    <input autocomplete="username" name="email" type="email" required placeholder="email" />
    <input autocomplete="current-password" name="password" type="password" required placeholder="password" />
    <button formaction="?/login">Login</button>
  </form>


<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 20px auto;
  }
  input {
    margin-bottom: 20px;
    padding: 8px;
  }
  h1 {
    text-align: center;
  }

  button {
    background: #222;
    padding: 8px;
    border-radius: 4px;
    max-width: max-content;
    color: #fff;
  }
</style>