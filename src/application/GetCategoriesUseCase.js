import { CategoryApi } from "../infraestructure/CategoryApi";

export class GetCategoriesUseCase {

  static async execute() {
    return await CategoryApi.getCategories();
  }
  
}