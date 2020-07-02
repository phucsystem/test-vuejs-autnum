<template>
  <v-app>
    <Home
      v-if="action==='list'"
      @route="onRoute"
    />
    <InputForm
      v-if="action==='create' || action==='edit'"
      :target="editItem"
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
      editItem: null,
    };
  },
  methods: {
    onRoute(event) {
      this.editItem = null;
      if (event.action === 'edit') {
        this.editItem = event.item;
      }
      this.action = event.action;
    },
  },
};
</script>
