import { style } from '@angular/animations';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Recipes } from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipes>();
  recipes: Recipes[]=[
    new Recipes('crispy fried chicken','',
    'https://th.bing.com/th/id/OIP.OajGreIHuqBpGP9f53gMFwHaE7?pid=ImgDet&rs=1'),
    new Recipes('Mojito Cocktail','',
    'https://wallsdesk.com/wp-content/uploads/2017/01/Mojito-Wallpapers-HD.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipes){
    this.recipeWasSelected.emit(recipe);

  }

}
