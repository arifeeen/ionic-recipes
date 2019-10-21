import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [{
    id: '1',
    label: 'Biryani',
    // tslint:disable-next-line: max-line-length
    url: 'https://media.gettyimages.com/photos/hyderabadi-biryani-is-a-form-of-biryani-from-hyderabad-indiait-is-in-picture-id639704020?s=2048x2048',
    ingredients: ['rice', 'masala']
  },
  {
    id: '2',
    label: 'Chicken 65',
    url: 'https://media.gettyimages.com/photos/indian-plate-of-chicken-65-picture-id683055016?s=2048x2048',
    ingredients: ['chicken', 'masala']

  }];
  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

  getSingleRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
