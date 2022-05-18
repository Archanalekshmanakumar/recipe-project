import { Injectable } from '@angular/core';

import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipes } from'./recipe.model';

@Injectable()
 export class RecipeService {
 
     private recipes: Recipes[] = [
        new Recipes('crispy fried chicken',
        'this is a tasty recipe',
        'https://th.bing.com/th/id/OIP.OajGreIHuqBpGP9f53gMFwHaE7?pid=ImgDet&rs=1',
        [
          new ingredient('Meat',1),
          new ingredient('French Fries',20)
        ]),
        new Recipes('Mojito Cocktail',
        'delicous recipe',
        'https://wallsdesk.com/wp-content/uploads/2017/01/Mojito-Wallpapers-HD.jpg',
        [
          new ingredient('Buns',2),
          new ingredient('fish',1)
        ]),
      ];
      constructor(private slService:ShoppingListService){
        
      }

  
     
    getRecipes() {
      return this.recipes.slice();
    }
    getRecipe(index: number) {
      return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: ingredient[]) {

      this.slService.addIngredients(ingredients);
    }
  }