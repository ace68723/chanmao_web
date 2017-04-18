import {
  OpenTime
} from './../restaurant.model';
import {
  Restaurant
} from '../restaurant.model';
import {
  Injectable
} from '@angular/core'

@Injectable()
export class RestaurantService {
  private restaurants: Array < Restaurant > =
  [{
      id: 1,
      img: "src/images/res-img.png",
      
        name: '半亩园',
        taste: '粤式早茶',
        address: '77 main street,Toronto - 7km',
      location: "Markham",
      info: {
        openningTimes: {
          Monday: {
            start: "11:00",
            end: "22:00"
          },
          Tuesday: {
            start: "11:00",
            end: "22:00"
          },
          Wednesday: {
            start: "11:00",
            end: "22:00"
          },
          Thursday: {
            start: "11:00",
            end: "22:00"
          },
          Friday: {
            start: "11:00",
            end: "22:00"
          },
          Saturday: {
            start: "11:00",
            end: "22:00"
          },
          Sunday: {
            start: "11:00",
            end: "22:00"
          },
        }
      },
      menu: {
        menuCategorys: [{
            name: '厨师推荐',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
                img: 'src/images/res-logo.png'
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          }
        ]
      }

    },
    {
      id: 2,
      img: "src/images/res-img.png",
      
        name: '半亩园2',
        taste: '粤式早茶',
        address: '77 main street,Toronto - 7km',
      location: "North York",
      info: {
        openningTimes: {
          Monday: {
            start: "11:00",
            end: "22:00"
          },
          Tuesday: {
            start: "11:00",
            end: "22:00"
          },
          Wednesday: {
            start: "11:00",
            end: "22:00"
          },
          Thursday: {
            start: "11:00",
            end: "22:00"
          },
          Friday: {
            start: "11:00",
            end: "22:00"
          },
          Saturday: {
            start: "11:00",
            end: "22:00"
          },
          Sunday: {
            start: "11:00",
            end: "22:00"
          },
        }
      },
      menu: {
        menuCategorys: [{
            name: '厨师推荐',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          }
        ]
      }
    },
    {
      id: 3,
      img: "src/images/res-img.png",
      
        name: '半亩园3',
        taste: '粤式早茶',
        address: '77 main street,Toronto - 7km',
      location: "Richmond Hill",
      info: {
        openningTimes: {
          Monday: {
            start: "11:00",
            end: "22:00"
          },
          Tuesday: {
            start: "11:00",
            end: "22:00"
          },
          Wednesday: {
            start: "11:00",
            end: "22:00"
          },
          Thursday: {
            start: "11:00",
            end: "22:00"
          },
          Friday: {
            start: "11:00",
            end: "22:00"
          },
          Saturday: {
            start: "11:00",
            end: "22:00"
          },
          Sunday: {
            start: "11:00",
            end: "22:00"
          },
        }
      },
      menu: {
        menuCategorys: [{
            name: '厨师推荐',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          }
        ]
      }
    },
    {
      id: 4,
      img: "src/images/res-img.png",
      
        name: '半亩园4',
        taste: '粤式早茶',
        address: '77 main street,Toronto - 7km',
      location: "Downtown",
      info: {
        openningTimes: {
          Monday: {
            start: "11:00",
            end: "22:00"
          },
          Tuesday: {
            start: "11:00",
            end: "22:00"
          },
          Wednesday: {
            start: "11:00",
            end: "22:00"
          },
          Thursday: {
            start: "11:00",
            end: "22:00"
          },
          Friday: {
            start: "11:00",
            end: "22:00"
          },
          Saturday: {
            start: "11:00",
            end: "22:00"
          },
          Sunday: {
            start: "11:00",
            end: "22:00"
          },
        }
      },
      menu: {
        menuCategorys: [{
            name: '厨师推荐',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          }
        ]
      }
    },
    {
      id: 5,
      img: "src/images/res-img.png",
      
        name: '半亩园5',
        taste: '粤式早茶',
        address: '77 main street,Toronto - 7km',
      location: "Mississauga",
      info: {
        openningTimes: {
          Monday: {
            start: "11:00",
            end: "22:00"
          },
          Tuesday: {
            start: "11:00",
            end: "22:00"
          },
          Wednesday: {
            start: "11:00",
            end: "22:00"
          },
          Thursday: {
            start: "11:00",
            end: "22:00"
          },
          Friday: {
            start: "11:00",
            end: "22:00"
          },
          Saturday: {
            start: "11:00",
            end: "22:00"
          },
          Sunday: {
            start: "11:00",
            end: "22:00"
          },
        }
      },
      menu: {
        menuCategorys: [{
            name: '厨师推荐',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          }
        ]
      }
    },
    {
      id: 6,
      img: "src/images/res-img.png",
      
        name: '半亩园6',
        taste: '粤式早茶',
        address: '77 main street,Toronto - 7km',
      location: "Scarborough",
      info: {
        openningTimes: {
          Monday: {
            start: "11:00",
            end: "22:00"
          },
          Tuesday: {
            start: "11:00",
            end: "22:00"
          },
          Wednesday: {
            start: "11:00",
            end: "22:00"
          },
          Thursday: {
            start: "11:00",
            end: "22:00"
          },
          Friday: {
            start: "11:00",
            end: "22:00"
          },
          Saturday: {
            start: "11:00",
            end: "22:00"
          },
          Sunday: {
            start: "11:00",
            end: "22:00"
          },
        }
      },
      menu: {
        menuCategorys: [{
            name: '厨师推荐',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          }
        ]
      }
    }
  ]

  getRestaurant(eventId: number) {
    return this.restaurants.find(event => event.id === eventId)
  }

  getRestaurants() {
    return this.restaurants
  }


}
