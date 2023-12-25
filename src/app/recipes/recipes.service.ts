import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    recipeToSL = new EventEmitter<Ingredient[]>();

    constructor(private SlService: ShoppingListService){}

    recipes:Recipe[] = [
        new Recipe('A Tasty Schnitzel',
        "A super-tasty Schnitzel - just awesome!",
        "https://www.jocooks.com/wp-content/uploads/2019/04/pork-schnitzel-1.jpg",
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20),
        ]),
        new Recipe('A Big Fat Burger',
        "What else you need to say?",
        "https://fatburger.com/wp-content/uploads/sites/6/2022/11/Large-Kingburger-Fatburger-1024x1024.jpeg",
        [
            new Ingredient('Buns',2),
            new Ingredient("Meat",1)
        ])
    ]

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
        this.SlService.addIngredientsFromRecipe(ingredients);
    }

}