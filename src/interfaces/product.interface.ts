export interface IProduct {
    _id?: string,
    name?: string,
    price?: number,
    category?: string,
    stock?: number,
    description?: string,
    brand?: string,
    specialPrice?:number,
    sku?: string,
    tags?: string[],
    createdAt?: Date,
    updatedAt?: Date 
  }