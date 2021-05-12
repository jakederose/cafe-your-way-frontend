export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id = 0, name = '', description = '', price = 0, imageUrl ='https://media.istockphoto.com/photos/aerial-view-of-various-coffee-picture-id938993594?k=6&m=938993594&s=612x612&w=0&h=AMuuDGZ4EHwB0OhL8sJ4WNGbz98wZX1NOg5ZLdxSv9E='){
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
  }
}
