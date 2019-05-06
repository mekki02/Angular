import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe','this is simply a test', 
    'http://downloads.bbc.co.uk/skillswise/entry12/english/en05skim/images/en05skim-e2-w-scanning-a-recipe-tikka-masala-ans-592x838.jpg'),
    new Recipe('A test Recipe','this is simply a test', 
    'http://downloads.bbc.co.uk/skillswise/entry12/english/en05skim/images/en05skim-e2-w-scanning-a-recipe-tikka-masala-ans-592x838.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
