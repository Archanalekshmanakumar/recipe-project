import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService} from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: ingredient[] =[
  ];
 private igChangeSub: Subscription = new Subscription;
  
  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingerdientsChanged
    .subscribe(
      (ingredients: ingredient[])=>{
         this.ingredients = ingredients;
      }
      );
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  }



