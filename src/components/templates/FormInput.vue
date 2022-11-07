<script setup lang="ts">
import type { ITemplateAttribute } from "../../providers/template/types";

const props = defineProps<{
  modelValue: String;
  attribute: ITemplateAttribute;
}>();

const emit = defineEmits(["update:modelValue"]);

function updateValue(value) {
  console.log(value);

  emit("update:modelValue", value);
}
</script>

<template>
  <div>
    <q-input
      v-if="attribute.type === 'text'"
      outlined
      v-on:update:modelValue="updateValue($event)"
      :modelValue="props.modelValue"
      :label="attribute.name"
    />

    <q-input
      v-else-if="attribute.type === 'number'"
      outlined
      type="number"
      v-on:update:modelValue="updateValue($event)"
      :modelValue="props.modelValue"
      :label="attribute.name"
    />

    <q-checkbox
      v-else-if="attribute.type === 'checkbox'"
      v-on:update:modelValue="updateValue($event)"
      :modelValue="props.modelValue"
      :label="attribute.name"
    />

    <q-select
      v-else-if="attribute.type === 'select'"
      outlined
      v-on:update:modelValue="updateValue($event)"
      :modelValue="props.modelValue"
      :options="attribute.extra.options"
      :label="attribute.name"
    />

    <div v-else-if="attribute.type === 'radio'" class="q-gutter-sm">
      <q-radio
        v-for="o in attribute.extra.options"
        v-on:update:modelValue="updateValue($event)"
        :modelValue="props.modelValue"
        :key="o"
        :val="o"
        :label="o"
      />
    </div>
  </div>
</template>
