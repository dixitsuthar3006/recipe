import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  viewRecipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.viewRecipe = this.recipeService.getRecipe(this.id);
    });
  }

  toShoppingList() {
    this.recipeService.addIngredientsToSL(this.viewRecipe.ingredients);
    // to navigate on shopping list after adding ingredients
    // this.router.navigate(['/shopping-list']);
  }

  OnEditRecipe() {
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  onDeleteRecipe() {
    this.recipeService.delRecipe(this.id);
  }
}
