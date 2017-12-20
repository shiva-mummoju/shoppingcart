import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Output,EventEmitter } from '@angular/core/';
;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1','This is simple a test','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg') ,
    new Recipe('Test Recipe 2','This is simple a test','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg'),
    new Recipe('Test Recipe 3','This is simple a test','https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg') ]
    
    ;

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
