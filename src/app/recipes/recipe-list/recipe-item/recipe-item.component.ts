import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeitem: Recipe;
  @Output() recipeSelected = new EventEmitter<void>(); 
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
    this.recipeSelected.emit();
  }

}
