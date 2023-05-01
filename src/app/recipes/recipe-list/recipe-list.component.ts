import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test','It is a Test','https://picsum.photos/200/300'),
    new Recipe('Test-2','It is a Test','https://picsum.photos/200/300'),
    new Recipe('Test-3','It is a Test','https://picsum.photos/200/300')
  ];
}
