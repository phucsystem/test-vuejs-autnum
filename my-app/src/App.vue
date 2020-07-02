<template>
  <v-app>
    <Home
      v-if="action==='list'"
      @route="onRoute"
    />
    <InputForm
      v-if="action==='create' || action==='edit'"
      @route="onRoute"
    />
  </v-app>
</template>

<script>
  import Home from "./components/Home";
  import InputForm from "./components/InputForm";

  export default {
    name: "App",
    components: {
      Home,
      InputForm
    },
    data: function () {
      return {
        action: 'list'
      }
    },
    methods:{
      onRoute: function (action) {
        this.action = action
      }
    }
  }
</script>