import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Ingredient } from "../ingredients.model";

@Injectable({
    providedIn: 'root'
})

export class ShoppingListService implements OnInit{
    ingredients:Ingredient[] = [ new Ingredient('tomatoes',20), new Ingredient('apples', 10)]
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ngOnInit() {}

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredients(ingredients:Ingredient) {
        this.ingredients.push(ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
    addIngredientsFromRecipe(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}