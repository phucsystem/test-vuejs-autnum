<template>
  <div>
    <div class="my-4 subtitle-1">
      Attribute {{ number }}
    </div>
    <v-text-field
      v-model="source"
      :rules="sourceRules"
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
  </div>
</template>

<script>
  export default {
    name: "AttributeInput",
    props:{
      number : {
        type: Number,
        default: 0
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>