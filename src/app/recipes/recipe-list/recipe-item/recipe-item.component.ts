import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe:Recipe;

  constructor(private recipeService:RecipeService){}

  recipeSelected() {
    this.recipeService.selectedRecipe.emit(this.recipe)
  }
}
