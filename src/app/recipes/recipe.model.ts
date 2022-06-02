import { ingredient } from "../shared/ingredient.model";
export class Recipes{
  
    public name: string;
    public description:string;
    public imagepath: string;
    public ingredients: ingredient[] 
    static map: any;

    constructor(name:string, desc:string, imagepath:string, ingredients: ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagepath=imagepath;
        this.ingredients=ingredients;
    }
}