<template>
  <form>
    <label for="user">Username</label>
    <input type="text" name="email">
    <br>
    <label for="password">Password</label>
    <input type="password" name="password">
  </form>
</template>
<style lang="scss" scoped>
  form {
    padding-top: 1em;
    font-size: 1.3em;

    input {
      font-size: 1.1em;
      font-weight: bolder;
      width: 60%;
      margin: 0 20% 1em;
    }
  }
</style>
