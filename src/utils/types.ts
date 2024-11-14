// export type TIngredient = {
//     _id: string;
//     name: string;
//     type: string;
//     proteins: number;
//     fat: number;
//     carbohydrates: number;
//     calories: number;
//     price: number;
//     image: string;
//     image_mobile: string;
//     image_large: string;
//     __v: number;
//   };
  export type TIngredient = {
    readonly calories: number,
    readonly carbohydrates: number,
    readonly fat: number,
    readonly image: string,
    readonly image_large: string,
    readonly image_mobile:string,
    readonly name: string,
    readonly price: number,
    readonly proteins: number,
    readonly type: string,
    readonly _id: string,
    readonly id?: string,
   }; 
  
//    export type TIngredient = {
//     calories: number;
//     carbohydrates: number;
//     fat: number;
//     image: string;
//     image_large: string;
//     image_mobile: string;
//     name: string;
//     price: number;
//     proteins: number;
//     qty: number;
//     type: string;
//     _id: string;
//   };