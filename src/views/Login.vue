<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    mounted() {
      auth0.authorize();
    }
  };
</script>
