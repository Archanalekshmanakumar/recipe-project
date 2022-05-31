import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipes } from '../recipe.model';

import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipes!: Recipes;
  id !:number;
 
 
  //recipes: any;

  constructor(private recipeService: RecipeService,
    private route:ActivatedRoute,
    private router:Router) {}
   

  ngOnInit(): void {

   const id= this.route.params
    .subscribe(
      (params:Params) => {
        this.id =+params['id'];
        this.recipes=this.recipeService.getRecipe(this.id);
      }
    );
  }
 onAddToShoppingList(){
   this.recipeService.addIngredientsToShoppingList(this.recipes.ingredients);

 }
 onEditRecipe(){
  this.router.navigate(['edit'], {relativeTo: this.route});
 }
 onDeleteRecipe() {
   this.recipeService.deleteRecipe(this.id);
   this.router.navigate(['/recipes']);
 }
}
