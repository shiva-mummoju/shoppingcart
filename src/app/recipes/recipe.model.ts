export class Recipe {
   public name = 'default name';
   public description = 'default description';
   public imagePath = 'default image path';

   constructor(name,desc,imagePath){
       this.name = name;
       this.description = desc;
       this.imagePath = imagePath;
   }
}