export interface ISpecialPrice{
  id?: string,
  subscribedUsers?: {
     document: string,
     name: string
   }[],
  productId?: string,
  specialPrice?:number, 
  createdAt?: Date,
  updatedAt?: Date
  }
  