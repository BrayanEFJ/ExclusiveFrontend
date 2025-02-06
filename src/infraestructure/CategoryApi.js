import { Category } from "../domain/Category";


export class CategoryApi {
  static async getCategories() {
    try {
      const response = await fetch("http://localhost:8000/api/v1/Categories");
      if (!response.ok) {
        throw new Error("No se pudieron obtener las categorías");
      }
      const data = await response.json();
      return data.map(category => new Category(category));  
    } catch (error) {
      console.error("Error al obtener categorías:", error);
      throw error;
    }
  }
}