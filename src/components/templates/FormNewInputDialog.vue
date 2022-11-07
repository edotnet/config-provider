<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["newInput"]);

const form = ref({});

const dialog = ref(true);

const onSubmit = () => {
  emit("newInput", form.value);
};
</script>

<template>
  <q-dialog :modelValue="dialog">
    <q-card style="width: 700px; max-width: 80vw">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-card-section>
          <div class="text-h6">Add new configuration</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input outlined v-model="form.name" label="Name" class="q-mb-md" />

          <q-select
            outlined
            v-model="form.type"
            :options="['text', 'number', 'select', 'checkbox', 'radio']"
            class="q-mb-md"
            label="Type"
          />

          <template v-if="form.type === 'select' || form.type === 'radio'">
            <q-input outlined v-model="form.options" label="Options"> </q-input>
            <p class="q-text-small">Separate with commas</p>
          </template>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Discard" v-close-popup />
          <q-btn flat type="submit" label="Save" v-close-popup />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>
