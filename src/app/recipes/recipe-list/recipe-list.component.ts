import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Musahhab", "Dajaj wit Baksamat", "https://th.bing.com/th/id/OIP.tMJMh30XLtTZzMSTRNDXEgHaHa?pid=ImgDet&w=1080&h=1080&rs=1")
  ];

}
