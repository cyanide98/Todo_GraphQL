<template>
  <v-app id="app">
    <v-content>
      <v-container id="container">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="stylus" scope>
#app
  background: linear-gradient(-45deg, #3A1C71, #23A6D5, #512DA8, #606c88)
  background-size: 400% 400%
  -webkit-animation: Gradient 15s ease infinite
  -moz-animation: Gradient 15s ease infinite
  animation: Gradient 8s ease infinite
#container
  max-width: 550px
  padding: 8px

@-webkit-keyframes Gradient
  0%
    background-position: 0% 50%

  50%
    background-position: 100% 50%

  100%
    background-position: 0% 50%

@-moz-keyframes Gradient
  0%
    background-position: 0% 50%

  50%
    background-position: 100% 50%

  100%
    background-position: 0% 50%

@keyframes Gradient
  0%
    background-position: 0% 50%

  50%
    background-position: 100% 50%

  100%
    background-position: 0% 50%
v-card
  box-shadow 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22) !important
</style>
