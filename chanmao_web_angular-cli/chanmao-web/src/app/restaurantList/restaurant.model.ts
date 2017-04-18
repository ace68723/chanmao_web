export interface Restaurant {
    id: number,
    img: string,
    tags: {
      name: string,
      taste: string,
      address: string
    },
    location: string,
    info: RestaurantInfo,
    menu: Menu
}



export interface RestaurantInfo {
  openningTimes: {
    Monday: OpenTime,
    Tuesday: OpenTime,
    Wednesday: OpenTime,
    Thursday: OpenTime,
    Friday: OpenTime,
    Saturday: OpenTime,
    Sunday: OpenTime,
  }
}
export interface OpenTime {
    start: string,
    end: string
}

export interface Menu {
  menuCategorys: Array < MenuCategory >
}

export interface MenuCategory {
  name: string
  items?: Array < Item >
}

export interface Item {
    name: string,
    info: string,
    price: number,
    img? : string,
}
