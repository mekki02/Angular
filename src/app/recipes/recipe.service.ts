import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test Recipe','this is simply a test', 
        'http://downloads.bbc.co.uk/skillswise/entry12/english/en05skim/images/en05skim-e2-w-scanning-a-recipe-tikka-masala-ans-592x838.jpg'),
        new Recipe('A test Recipe','this is simply a test', 
        'http://downloads.bbc.co.uk/skillswise/entry12/english/en05skim/images/en05skim-e2-w-scanning-a-recipe-tikka-masala-ans-592x838.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}