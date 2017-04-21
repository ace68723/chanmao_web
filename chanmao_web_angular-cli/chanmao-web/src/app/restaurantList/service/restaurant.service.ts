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
                id: 300001,
                name: '茶树菇1',
                info: '简介简介简介1',
                price: 9.99,
                img: 'src/images/res-logo.png'
              },
              {
                id: 300002,
                name: '茶树菇2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300003,
                name: '茶树菇3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300004,
                name: '茶树菇4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300005,
                name: '茶树菇5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                id: 300006,
                name: '茶1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300007,
                name: '茶2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300008,
                name: '茶3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300009,
                name: '茶4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300010,
                name: '茶5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                id: 300011,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300012,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300013,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300014,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300015,
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
                id: 300016,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300017,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300018,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300019,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300020,
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                id: 300021,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300022,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300023,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300024,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300025,
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                id: 300026,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300027,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300028,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300029,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300030,
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
                id: 300031,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300032,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300033,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300034,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300035,
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                id: 300036,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300037,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300038,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300039,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300040,
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                id: 300041,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300042,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300043,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300044,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300045,
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
                id: 300045,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300046,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300047,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300048,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300049,
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                id: 300050,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300051,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300052,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300053,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300054,
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                id: 300055,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300056,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300057,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300058,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300059,
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
                id: 300060,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300061,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300062,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300063,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300064,
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                id: 300065,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300066,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300066,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300067,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300068,
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                id: 300069,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300070,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300071,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300072,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300073,
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
                id: 300074,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300075,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300076,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300077,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300078,
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '汤',
            items: [{
                id: 300079,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300080,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300081,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300082,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300083,
                name: '茶树菇瓦罐汤5',
                info: '简介简介简介5',
                price: 49.99,
              }
            ]
          },
          {
            name: '甜点',
            items: [{
                id: 300084,
                name: '茶树菇瓦罐汤1',
                info: '简介简介简介1',
                price: 9.99,
              },
              {
                id: 300085,
                name: '茶树菇瓦罐汤2',
                info: '简介简介简介2',
                price: 19.99,
              },
              {
                id: 300086,
                name: '茶树菇瓦罐汤3',
                info: '简介简介简介3',
                price: 29.99,
              },
              {
                id: 300087,
                name: '茶树菇瓦罐汤4',
                info: '简介简介简介4',
                price: 39.99,
              },
              {
                id: 300088,
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
