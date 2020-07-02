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
            @click="$emit('route', 'create')"
          >
            New Item
          </v-btn>
          <v-data-table
            disable-sort
            hide-default-footer
            :headers="headers"
            :items="desserts"
            item-key="name"
            class="elevation-4"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
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
export default {
  name: 'Home',
  data: () => ({
    desserts: [
      {
        type: 'Frozen Yogurt',
        source: 6.0,
        description: 'dsdsdsdsdsddsd%',
      },
    ],
    headers: [
      { text: 'Type', value: 'type' },
      { text: 'Source', value: 'source' },
      { text: 'Description', value: 'description' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
  }),
};
</script>

<style scoped>
  .v-data-table-header thead th {
    color: black;
  }
</style>
