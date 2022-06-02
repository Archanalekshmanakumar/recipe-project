import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipes } from '../recipes/recipe.model';
import { RecipeService } from "../recipes/recipe.service";
import { map,tap,take, exhaustMap} from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";

@Injectable({providedIn:'root'})
export class DataStorageService{
    
      
    
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authService:AuthService) {}
    storeRecipes() {
        const recipes=this.recipeService.getRecipes();
        this.http.put('https://angular-recipe-project-b08b1-default-rtdb.firebaseio.com/recipes.json',
        recipes
        )
        .subscribe(response => {
            console.log(response);
        });
    }
    fetchRecipes() {
        
            return this.http
        .get<Recipes[]>
        ('https://angular-recipe-project-b08b1-default-rtdb.firebaseio.com/recipes.json',
        ).pipe(
        map(recipes=>{
            return Recipes.map( (recipe: { ingredients: any; })  =>{
                return {
                    ...recipe,
                    ingredients: recipe.ingredients ?
                    recipe.ingredients:[]};
            });
        }),
        tap(recipe=> { 
            this.recipeService.setRecipes(recipe);
        }));
       
        
      
    }
}                


