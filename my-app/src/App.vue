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
import Home from './components/Home.vue';
import InputForm from './components/InputForm.vue';

export default {
  name: 'App',
  components: {
    Home,
    InputForm,
  },
  data() {
    return {
      action: 'list',
    };
  },
  methods: {
    onRoute(action) {
      this.action = action;
    },
  },
};
</script>
