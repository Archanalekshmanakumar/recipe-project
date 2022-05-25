
import { ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

export class ShoppingListService {
    [x: string]: any;
    ingerdientsChanged = new Subject<ingredient[]>();
    startedEditing = new Subject<number>();
       private ingredients: ingredient[] =[
              new ingredient('apples', 5),
              new ingredient('Tomatoes', 10),
              new ingredient('orange',40),
              new ingredient('banana',10)
       ];
  
       getIngredients() {
           return this.ingredients.slice();

       }
       getIngredient(index: number) {
           return this.ingredients[index];
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
    updateIngredient(index:number, newIngredient:ingredient) {
        this.ingredients[index]= newIngredient;
        this.ingerdientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index,1);
        this.ingerdientsChanged.next(this.ingredients.slice());
    }
}





