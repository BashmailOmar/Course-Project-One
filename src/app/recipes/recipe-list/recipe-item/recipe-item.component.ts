import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() name: String | undefined;
  @Input() description: String | undefined;
  @Input() imagePath: String | undefined;
  // ngOnInit(){
  //   console.log(this.name);
  //   console.log(this.imagePath);
  // }
}
