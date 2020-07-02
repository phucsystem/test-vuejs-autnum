<template>
  <div>
    <v-row>
      <v-col
        cols="12"
      >
        <v-text-field
          v-model="value.name"
          label="Name"
          :rules="nameRules"
          required
        />
        <v-select
          v-model="value.requirement"
          :rules="[v => !!v || 'Requirement is required']"
          :items="requirements"
          item-text="text"
          item-value="value"
          label="Requirement"
          required
        />
        <v-select
          v-model="value.cardinality"
          :items="cardinalities"
          :rules="[v => !!v || 'Cardinality is required']"
          label="Cardinality"
          required
        />
        <v-select
          v-model="value.keys"
          chips
          :items="keys"
          multiple
          label="Keys"
          required
        />
        <v-text-field
          v-model="value.description"
          label="Description"
        />
        <v-text-field
          v-model="value.syntax"
          label="Syntax"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        class="text-right"
      >
        <v-btn
          outlined
          color="error"
          @click.stop="$emit('remove', value.number)"
        >
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AttributeInput',
  props: {
    value: {
      type: Object,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      requirements: [
        { text: 'Mandatory', value: 'MANDATORY' },
        { text: 'Optional', value: 'OPTIONAL' },
      ],
      cardinalities: [
        { text: 'Multiple', value: 'MULTIPLE' },
        { text: 'Single', value: 'SINGLE' },
      ],
      keys: [
        { text: 'Inverse Key', value: 'INVERSE_KEY' },
        { text: 'Primary Key', value: 'PRIMARY_KEY' },
        { text: 'Lookup Key', value: 'LOOKUP_KEY' },
      ],
      nameRules: [v => !!v || 'Name is required'],
    };
  },
  methods: {
  },
};
</script>

<style scoped>

</style>
