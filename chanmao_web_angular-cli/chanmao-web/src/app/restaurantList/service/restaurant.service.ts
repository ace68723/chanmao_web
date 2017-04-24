import { Restaurant } from '../restaurant.model';
import {Injectable} from '@angular/core'

@Injectable()
export class RestaurantService {
  private restaurants : Array<Restaurant> = [{
    id : 1,
    img: "src/images/res-img.png",
    tags: {
      name: '半亩园',
      taste: '粤式早茶',
      address: '77 main street,Toronto - 7km'
    },
    location: "Markham"
  },
  {
    id : 2,
    img: "src/images/res-img.png",
    tags: {
      name: '半亩园2',
      taste: '粤式早茶',
      address: '77 main street,Toronto - 7km'
    },
    location: "North York"
  },
  {
    id : 3,
    img: "src/images/res-img.png",
    tags: {
      name: '半亩园3',
      taste: '粤式早茶',
      address: '77 main street,Toronto - 7km'
    },
    location: "Richmond Hill"
  },
  {
    id : 4,
    img: "src/images/res-img.png",
    tags: {
      name: '半亩园4',
      taste: '粤式早茶',
      address: '77 main street,Toronto - 7km'
    },
    location: "Downtown"
  },
  {
    id : 5,
    img: "src/images/res-img.png",
    tags: {
      name: '半亩园5',
      taste: '粤式早茶',
      address: '77 main street,Toronto - 7km'
    },
    location: "Mississauga"
  },
  {
    id : 6,
    img: "src/images/res-img.png",
    tags: {
      name: '半亩园6',
      taste: '粤式早茶',
      address: '77 main street,Toronto - 7km'
    },
    location: "Scarborough"
  }]

  getRestaurant(eventId:number) {
    return this.restaurants.find(event => event.id === eventId)
  }

  getRestaurants() {
    return this.restaurants
  }


}
