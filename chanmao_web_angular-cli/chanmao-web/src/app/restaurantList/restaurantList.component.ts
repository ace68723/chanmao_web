import { RestaurantService } from './service/restaurant.service';
import { Restaurant } from './restaurant.model';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';




declare var $: any

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'restaurantList'
  selector: 'restaurant-list', // <restaurant-list></restaurant-list>

  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together

  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './restaurantList.component.html'
})


export class RestaurantListComponent implements OnInit {
  // Set our default values
  @Input() searchName : string

  displayedrestaurants : Array<Restaurant>;
  restaurants : Array<Restaurant>;


  // TypeScript public modifiers
  constructor(private restaurantService: RestaurantService) {
      this.restaurants = this.restaurantService.getRestaurants();
      this.displayedrestaurants = this.restaurants;
  }

  public ngOnInit() {

  }

  public filter(location: string) {
    if (location === 'All'){
      this.displayedrestaurants = this.restaurants;
      return;
    }
    this.displayedrestaurants = this.restaurants.filter(r => r.location === location)
  }
}
