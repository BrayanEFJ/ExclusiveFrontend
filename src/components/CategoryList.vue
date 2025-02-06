<script setup>
import { onMounted, ref, computed } from "vue";
import { useCategoryStore } from "../store/categoryStore";

const categoryStore = useCategoryStore();

const categories = computed(() => categoryStore.categories);

const loadCategories = () => {
  categoryStore.fetchCategories();
};
onMounted(() => {
  loadCategories();
});
</script>



<template>
  <div class="p-4 bg-gray-100 rounded-lg">
    <h2 class="text-lg font-bold mb-3">Categorías</h2>
    <button 
      @click="loadCategories" 
      class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Cargar Categorías
    </button>
      <li v-for="category in categories" :key="category.id" class="p-2 border-b">
        {{ category.name }}
      </li>
  </div>
</template>


