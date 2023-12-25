import { Component,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() viewRecipe:Recipe

  constructor(private recipeService:RecipeService){}

  toShoppingList() {
    this.recipeService.addIngredientsToSL(this.viewRecipe.ingredients);
  }
}
