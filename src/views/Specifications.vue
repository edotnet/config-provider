<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, computed } from "vue";
import { useStore } from "../store";
import { SpecificationsActionTypes } from "../store/modules/specifications/actions";
import SpecificationList from "../components/specifications/SpecificationList.vue";

const store = useStore();
const router = useRouter();

onMounted(async () => {
  await store.dispatch(SpecificationsActionTypes.FETCH_DATA);
});

const specifications = computed(() => store.getters.getSpecifications);
</script>

<template>
  <div>
    <specification-list :specifications="specifications"></specification-list>

    <q-btn
      class="q-mt-md"
      color="white"
      text-color="black"
      label="+ Add Specification"
      @click="router.push('/specifications/new')"
    />
  </div>
</template>
