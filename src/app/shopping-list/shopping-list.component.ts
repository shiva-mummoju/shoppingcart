import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
