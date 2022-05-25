import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { EventEmitter } from 'stream';
import { Recipes } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 // @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[]=[];
  subscription!:Subscription;
  

  constructor(private RecipeService: RecipeService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription=this.RecipeService.recipesChanged
    .subscribe(
      (recipes:Recipes[]) => {
        this.recipes=recipes;
      }
    );
    
     this.recipes = this.RecipeService.getRecipes();
  }
  onNewRecipe(){

    this.router.navigate(['new'],{ relativeTo:this.route});



  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
 
}
