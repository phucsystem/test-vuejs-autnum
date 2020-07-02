<template>
  <v-main>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="10"
          md="6"
        >
          <v-btn
            color="primary"
            dark
            class="mb-2"
            @click="create"
          >
            New Item
          </v-btn>
          <v-data-table
            disable-sort
            hide-default-footer
            :headers="headers"
            :items="resources"
            item-key="name"
            class="elevation-4"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="edit(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteResource(item)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  data: () => ({
    headers: [
      { text: 'Type', value: 'type' },
      { text: 'Source', value: 'source' },
      { text: 'Description', value: 'description' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
  }),
  computed: {
    ...mapState('resources', ['resources']),
  },
  methods: {
    ...mapActions({
      deleteResource: 'resources/delete',
    }),
    create() {
      this.$emit('route', { action: 'create' });
    },
    edit(item) {
      this.$emit('route', { action: 'edit', item });
    },
  },
};
</script>

<style scoped>
  .v-data-table-header thead th {
    color: black;
  }
</style>
