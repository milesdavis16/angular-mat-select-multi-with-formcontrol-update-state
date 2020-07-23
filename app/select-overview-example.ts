import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
export interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Mat-Select Multiple initialisation with ngModel
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  
  allfoods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'pasta-3', viewValue: 'Pasta'}
  ];
  myselectedFoods = ['pasta-3', 'steak-0'];
  foodForm: FormControl = new FormControl(this.myselectedFoods);
}

