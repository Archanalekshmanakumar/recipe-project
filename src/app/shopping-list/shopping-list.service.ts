
import { ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingerdientsChanged = new Subject<ingredient[]>();
       private ingredients: ingredient[] =[
              new ingredient('apples', 5),
              new ingredient('Tomatoes', 10),
              new ingredient('orange',40),
              new ingredient('banana',10)
       ];
       getIngredients() {
           return this.ingredients.slice();
       }
    addIngredient(ingredient: ingredient){
        this.ingredients.push(ingredient);
        this.ingerdientsChanged.next(this.ingredients.slice());

    }
    addIngredients(ingredients: ingredient[]){
           //for ( let ingredient of ingredients){

           // this.addIngredient(ingredient);

        //   }

    this.ingredients.push(...ingredients);

    this.ingerdientsChanged.next(this.ingredients.slice());
    }
}