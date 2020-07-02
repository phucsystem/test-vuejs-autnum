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
          <v-card class="elevation-12">
            <v-toolbar
              flat
            >
              <v-toolbar-title>Input form</v-toolbar-title>
            </v-toolbar>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-card-title>Main Information</v-card-title>

              <v-card-text>
                <v-select
                  v-model="type"
                  :items="typeItems"
                  :rules="[v => !!v || 'Type is required']"
                  label="Type"
                  required
                />

                <v-text-field
                  v-model="source"
                  :rules="sourceRules"
                  label="Source"
                  required
                />

                <v-textarea
                  v-model="description"
                  :rules="descriptionRules"
                  label="Description"
                  required
                />
              </v-card-text>

              <v-card-title>Attributes</v-card-title>

              <v-card-text>
                <AttributeInput />
              </v-card-text>
            </v-form>

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="error"
                @click="cancel"
              >
                Cancel
              </v-btn>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import AttributeInput from "./AttributeInput";

  export default {
    name: "Inputform",
    components: {AttributeInput},
    data: () => ({
      valid: true,
      description: '',
      descriptionRules: [
        v => !!v || 'Description is required',
      ],
      source: '',
      sourceRules: [
        v => !!v || 'Source is required',
      ],
      type: null,
      typeItems: [
        'aut-num',
        'aut-num 2',
        'aut-num 3',
        'aut-num 4',
      ],
      attributes: []
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      cancel () {
        this.$emit('route', 'list')
      },
      addAttribute(){

      }
    }}
</script>

<style scoped>

</style>