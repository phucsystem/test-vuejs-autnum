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
            <v-toolbar flat>
              <v-toolbar-title>Input form</v-toolbar-title>
            </v-toolbar>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-card-title>Main Information</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="6">
                    <v-select
                      v-model="type"
                      :items="typeItems"
                      :rules="[v => !!v || 'Type is required']"
                      label="Type"
                      required
                    />
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="source"
                      :rules="sourceRules"
                      label="Source"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      v-model="description"
                      :rules="descriptionRules"
                      label="Description"
                      rows="2"
                      required
                    />
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-title>
                <v-row>
                  <v-col cols="4">
                    Attributes
                  </v-col>

                  <v-spacer />

                  <v-col
                    cols="2"
                    class="d-flex align-end flex-column"
                  >
                    <v-btn
                      color="info"
                      @click.stop="addAttribute"
                    >
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-title>

              <v-card-text>
                <v-expansion-panels
                  accordion
                  focusable
                >
                  <v-expansion-panel
                    v-for="attribute in attributes"
                    :key="attribute.number"
                  >
                    <v-expansion-panel-header>
                      Attribute {{ attribute.number }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <AttributeInput
                        :key="attribute.number"
                        :value="attribute"
                      />
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-text>
            </v-form>

            <v-card-actions>
              <v-row>
                <v-col cols="6">
                  <v-btn
                    block
                    color="error"
                    @click="cancel"
                  >
                    Cancel
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn
                    block
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                  >
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AttributeInput from './AttributeInput.vue';

export default {
  name: 'Inputform',
  components: { AttributeInput },
  data: () => ({
    valid: true,
    description: '',
    descriptionRules: [v => !!v || 'Description is required'],
    source: '',
    sourceRules: [v => !!v || 'Source is required'],
    type: null,
    typeItems: ['aut-num', 'aut-num 2', 'aut-num 3', 'aut-num 4'],
    attributes: [],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    cancel() {
      this.$emit('route', 'list');
    },
    addAttribute() {
      const addItem = {
        number: this.attributes.length + 1,
      };
      this.attributes = [...this.attributes, addItem];
    },
  },
};
</script>

<style scoped></style>
