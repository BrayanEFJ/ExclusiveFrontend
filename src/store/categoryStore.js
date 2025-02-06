import { defineStore } from "pinia";
import { GetCategoriesUseCase } from '../application/GetCategoriesUseCase';

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async fetchCategories() {
      const categories = await GetCategoriesUseCase.execute();
      console.log("Categorías obtenidas", categories);  // Verifica que las categorías estén siendo asignadas
      this.categories = categories;
    },
  },
});