import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef;
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor(private shoppingListService:ShoppingListService) {}

  onAddIngredients(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingamount = this.amountInputRef.nativeElement.value;
    
    const newIngredient = new Ingredient(ingName,ingamount);

    this.shoppingListService.addIngredients(newIngredient);
  }
}
