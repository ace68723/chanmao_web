export interface Restaurant {
    id : number,
    img: string,
    tags: {
      name: string,
      taste: string,
      address: string
    },
    location: string
}
