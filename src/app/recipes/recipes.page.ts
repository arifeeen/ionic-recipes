import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes = [];
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.recipes = this.recipeService.getRecipes();
  }

}
