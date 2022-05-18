// import { outputAst } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild,EventEmitter,Output } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef !: ElementRef;
  @ViewChild('amountInput') amountInputRef !: ElementRef;
  @Output() ingredientAdded = new EventEmitter<ingredient>();

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
 

}
