<script setup lang="ts">
import type { ISpecification } from "../../providers/specification/types";

defineProps<{
  specification: ISpecification;
}>();
</script>

<template>
  <div style="min-width: 350px">
    <q-expansion-item :label="specification.name">
      <q-card>
        <q-card-section>
          <p v-for="a in Object.entries(specification.attributes)" :key="a[0]">
            {{ a[0] }} - {{ a[1] }}
          </p>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
