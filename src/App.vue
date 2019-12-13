<template>
  <div>
    <router-link to="/">
      Home
    </router-link> | <router-link to="/medium">
    Medium
  </router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: black;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    height: 100%;
  }
</style>
