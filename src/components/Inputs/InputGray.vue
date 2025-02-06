<script setup>
  import { Search } from 'lucide-vue-next';

defineProps({
  placeholder: String,
  search: Boolean
});


</script>

<template>

<div class="relative w-full">
    <input
      type="text"
      :placeholder="placeholder"
      class="w-full px-6 py-3 pr-12 border-none rounded-md bg-gray-100 min-w-72"
    />
    <Search
      v-if="search"
      :size="24"
      class="absolute right-3 top-1/2 transform -translate-y-1/2"
    />
  </div>

</template>