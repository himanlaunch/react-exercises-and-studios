import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.simplyrecipes.com/hannah-zimmerman-5195688";
   let authorPhoto = "https://www.simplyrecipes.com/thmb/wEZHhefYA6_eEQ2s_aga-MlrlwM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HannahZimmerman-6083410d49374410b1eca9969832c141.jpg";
   let authorName = "Hannah Zimmerman";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients['semi-sweet chocolate']}</li>
            <li>{ingredients['1/2 cup unsalted butter']}</li>
            <li>{ingredients['1 cup powdered sugar']}</li>
            <li>{ingredients['2 large eggs']}</li>
            <li>{ingredients['1/4 cup all-purpose flour']}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.simplyrecipes.com/thmb/25H_Y2C1qNquReaVVGQ-JaHQrp4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chocolate-Lava-Cake-LEAD-1-40caebef08424ee5ab014f7363216c1d.jpg" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
