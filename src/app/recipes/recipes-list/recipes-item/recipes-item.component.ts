
import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
// import { EventEmitter } from 'stream';
// import { Recipes } from '../../recipe.model';
import { Recipes } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
 
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe !: Recipes;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {  
    
    
  }

  ngOnInit(): void {

  }
  onSelected(){
    this.recipeSelected.emit();
    
  }

}
