export interface Restaurant {
    id: number;
    img: string;
    cardImg: string;
    bannerImg: string;
    name: string;
    taste: string;
    address: string;
    location: string;
    info: RestaurantInfo;
    menu: Menu;
}
export interface RestaurantBaseInfo {
    id: number;
    img: string;
    name: string;
    taste: string;
    address: string;
    location: string;
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
  };
}
export interface OpenTime {
    start: string;
    end: string;
}

export interface Menu {
  menuCategorys: Array < MenuCategory >;
}

export interface MenuCategory {
  name: string;
  items: Array < Item >;
}

export interface Item {
    id: number;
    name: string;
    info: string;
    price: number;
    img? : string;
}
