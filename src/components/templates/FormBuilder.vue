<script setup lang="ts">
import FormInput from "./FormInput.vue";
import type { ITemplateAttribute } from "../../providers/template/types";

const props = defineProps<{
  attributes: ITemplateAttribute[];
  modelValue: Object;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <q-form class="q-gutter-md">
    <form-input
      v-for="a in attributes"
      v-on:update:modelValue="emit('update:modelValue', $event)"
      :modelValue="props.modelValue[a.name]"
      :key="a"
      :attribute="a"
    ></form-input>
  </q-form>
</template>
