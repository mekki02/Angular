import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome !', 
        'https://www.daskochrezept.de/sites/default/files/styles/169_xl/public/rezepte/2009/2/Wiener-Schnitzel-1A-49a1616656a6c.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger',
        'What else you need to say?', 
        'https://www.bbqlove.de/wp-content/uploads/2016/12/Fotolia_94498422_S.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat',1)
        ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}