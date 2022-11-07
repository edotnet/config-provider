<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../store";
import { SpecificationsActionTypes } from "../store/modules/specifications/actions";
import FormBuilder from "../components/templates/FormBuilder.vue";
import FormNewInputDialog from "../components/templates/FormNewInputDialog.vue";
import { ITemplateAttribute } from "../providers/template/types";
import { ISpecification } from "../providers/specification/types";

const store = useStore();
const route = useRoute();

onMounted(async () => {
  await store.dispatch(SpecificationsActionTypes.FETCH_DATA);
});

const template = computed(() => store.getters.getTemplate);

const dialog = ref(false);
const form = ref({});

onMounted(() => {
  template.value.attributes.forEach((a) => (form[a.name] = ""));
});

const newAttribute = (attr: Partial<ITemplateAttribute>) => {
  store.dispatch(SpecificationsActionTypes.NEW_ATTRIBUTE, attr);
};

const onSubmit = (spec: Partial<ISpecification>) => {
  store.dispatch(SpecificationsActionTypes.NEW_SPECIFICATION, spec);
};
</script>

<template>
  <q-form @submit="onSubmit" class="q-gutter-md">
    {{ form }}
    <form-builder
      v-if="template"
      :attributes="template.attributes"
      v-model:form="form"
    ></form-builder>

    <div class="q-pt-md">
      <q-btn
        class="q-mr-md"
        color="white"
        text-color="black"
        label="+ Add Configuration"
        @click="dialog = true"
      />

      <q-btn
        class="q-ml-md"
        color="white"
        text-color="black"
        type="submit"
        label="Save"
      />
    </div>

    <form-new-input-dialog v-if="dialog" @newInput="newAttribute" />
  </q-form>
</template>
