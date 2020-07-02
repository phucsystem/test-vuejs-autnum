<template>
  <div>
    <v-text-field
      label="Name"
      required
    />
    <v-select
      :rules="[v => !!v || 'Type is required']"
      label="Requirement"
      required
    />
    <v-select
      :rules="[v => !!v || 'Type is required']"
      label="Cardinality"
      required
    />
    <v-select
      :rules="[v => !!v || 'Type is required']"
      label="Keys"
      required
    />
    <v-text-field
      label="Description"
      required
    />
    <v-text-field
      label="Syntax"
      required
    />
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'AttributeInput',
  props: {
    value: {
      type: Object,
    },
  },
  methods: {
  },
};
</script>

<style scoped>

</style>
