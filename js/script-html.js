/* 
   ? Display a recipe grid
   ? Show/Hide a modal for each recipe
   ? Modal with recipe picture, description and ingredients (+ images)
   ? Add a background overlay 
*/

/* ------------------------------------------------------------- 
* Array of recipes infos
----------------------------------------------------------------*/
let recipesInfos = [
   {
      image: "./images/recipes/recipe1.jpg",
      tags: ["Gluten", "Healthy"],
      title: "Buddha Bowl au saumon, radis, chou rouge et edamame",
      text: "Du poulet en sauce à la moutarde en version Sana. Eh oui, car dans cette recette, je n'hésite pas à remplacer la crème par du yaourt pour épaissir la sauce à la moutarde. C'est tout aussi bon et beaucoup plus digeste, promis !",
      ingNames: [
         "Oignons jaunes",
         "Pommes de terre",
         "Tomates",
         "Boeuf",
         "Betteraves",
         "Brocolis",
      ],
      ingImgs: [
         "./images/ingredients/oignons.png",
         "./images/ingredients/pdt.png",
         "./images/ingredients/tomates.png",
         "./images/ingredients/boeuf.png",
         "./images/ingredients/betterave.png",
         "./images/ingredients/brocolis.png",
      ],
   },
   {
      image: "./images/recipes/recipe2.jpg",
      tags: ["Veggie", "Healthy"],
      title: "Pâtes orzo et poulet à la méditerranéenne",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo rhoncus rutrum. Mauris at interdum nibh, ac malesuada metus. In euismod urna eu risus tempus efficitur. In volutpat arcu eu aliquet sollicitudin. Morbi nisl lorem, porttitor id tortor tempus, finibus aliquet mauris.",
      ingNames: [
         "Oignons jaunes",
         "Pommes de terre",
         "Tomates",
         "Boeuf",
         "Betteraves",
         "Brocolis",
      ],
      ingImgs: [
         "./images/ingredients/oignons.png",
         "./images/ingredients/pdt.png",
         "./images/ingredients/tomates.png",
         "./images/ingredients/boeuf.png",
         "./images/ingredients/betterave.png",
         "./images/ingredients/brocolis.png",
      ],
   },
   {
      image: "./images/recipes/recipe3.jpg",
      tags: ["Express"],
      title: "Spaghettis aux boulettes de viande et parmesan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo rhoncus rutrum. Mauris at interdum nibh, ac malesuada metus. In euismod urna eu risus tempus efficitur. In volutpat arcu eu aliquet sollicitudin. Morbi nisl lorem, porttitor id tortor tempus, finibus aliquet mauris.",
      ingNames: [
         "Oignons jaunes",
         "Pommes de terre",
         "Tomates",
         "Boeuf",
         "Betteraves",
         "Brocolis",
      ],
      ingImgs: [
         "./images/ingredients/oignons.png",
         "./images/ingredients/pdt.png",
         "./images/ingredients/tomates.png",
         "./images/ingredients/boeuf.png",
         "./images/ingredients/betterave.png",
         "./images/ingredients/brocolis.png",
      ],
   },
   {
      image: "./images/recipes/recipe4.jpg",
      tags: ["Express", "Lactose"],
      title: "Légumes cuits au four avec houmous et pommes de terre",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo rhoncus rutrum. Mauris at interdum nibh, ac malesuada metus. In euismod urna eu risus tempus efficitur. In volutpat arcu eu aliquet sollicitudin. Morbi nisl lorem, porttitor id tortor tempus, finibus aliquet mauris.",
      ingNames: [
         "Oignons jaunes",
         "Pommes de terre",
         "Tomates",
         "Boeuf",
         "Betteraves",
         "Brocolis",
      ],
      ingImgs: [
         "./images/ingredients/oignons.png",
         "./images/ingredients/pdt.png",
         "./images/ingredients/tomates.png",
         "./images/ingredients/boeuf.png",
         "./images/ingredients/betterave.png",
         "./images/ingredients/brocolis.png",
      ],
   },
   {
      image: "./images/recipes/recipe5.jpg",
      tags: ["Veggie", "Lactose"],
      title: "Nouilles au tofu, légumes et cacahuètes grillées",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo rhoncus rutrum. Mauris at interdum nibh, ac malesuada metus. In euismod urna eu risus tempus efficitur. In volutpat arcu eu aliquet sollicitudin. Morbi nisl lorem, porttitor id tortor tempus, finibus aliquet mauris.",
      ingNames: [
         "Oignons jaunes",
         "Pommes de terre",
         "Tomates",
         "Boeuf",
         "Betteraves",
         "Brocolis",
      ],
      ingImgs: [
         "./images/ingredients/oignons.png",
         "./images/ingredients/pdt.png",
         "./images/ingredients/tomates.png",
         "./images/ingredients/boeuf.png",
         "./images/ingredients/betterave.png",
         "./images/ingredients/brocolis.png",
      ],
   },
   {
      image: "./images/recipes/recipe6.jpg",
      tags: ["Veggie", "Express", "Healthy"],
      title: "Buddha bowl au poulet grillé, pois chiches, avocat, chou et poivron",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo rhoncus rutrum. Mauris at interdum nibh, ac malesuada metus. In euismod urna eu risus tempus efficitur. In volutpat arcu eu aliquet sollicitudin. Morbi nisl lorem, porttitor id tortor tempus, finibus aliquet mauris.",
      ingNames: [
         "Oignons jaunes",
         "Pommes de terre",
         "Tomates",
         "Boeuf",
         "Betteraves",
         "Brocolis",
      ],
      ingImgs: [
         "./images/ingredients/oignons.png",
         "./images/ingredients/pdt.png",
         "./images/ingredients/tomates.png",
         "./images/ingredients/boeuf.png",
         "./images/ingredients/betterave.png",
         "./images/ingredients/brocolis.png",
      ],
   },
   {
      image: "./images/recipes/recipe7.jpg",
      tags: ["Express", "Gluten"],
      title: "Rouleaux de courgettes à la ricotta et sauce marinara",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo rhoncus rutrum. Mauris at interdum nibh, ac malesuada metus. In euismod urna eu risus tempus efficitur. In volutpat arcu eu aliquet sollicitudin. Morbi nisl lorem, porttitor id tortor tempus, finibus aliquet mauris.",
      ingNames: [
         "Oignons jaunes",
         "Pommes de terre",
         "Tomates",
         "Boeuf",
         "Betteraves",
         "Brocolis",
      ],
      ingImgs: [
         "./images/ingredients/oignons.png",
         "./images/ingredients/pdt.png",
         "./images/ingredients/tomates.png",
         "./images/ingredients/boeuf.png",
         "./images/ingredients/betterave.png",
         "./images/ingredients/brocolis.png",
      ],
   },
   {
      image: "./images/recipes/recipe8.jpg",
      tags: ["Veggie", "Lactose"],
      title: "Boulettes grecques, tomates cerise et sauce tzatziki",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo rhoncus rutrum. Mauris at interdum nibh, ac malesuada metus. In euismod urna eu risus tempus efficitur. In volutpat arcu eu aliquet sollicitudin. Morbi nisl lorem, porttitor id tortor tempus, finibus aliquet mauris.",
      ingNames: [
         "Oignons jaunes",
         "Pommes de terre",
         "Tomates",
         "Boeuf",
         "Betteraves",
         "Brocolis",
      ],
      ingImgs: [
         "./images/ingredients/oignons.png",
         "./images/ingredients/pdt.png",
         "./images/ingredients/tomates.png",
         "./images/ingredients/boeuf.png",
         "./images/ingredients/betterave.png",
         "./images/ingredients/brocolis.png",
      ],
   },
];

/* ------------------------------------------------------------- 
* Create div's for RECIPES ans show HTML elements
----------------------------------------------------------------*/

// ? HTML element for recipes
const DIV_RECIPES = document.getElementById("recipes");

// ? Create each recipe div's
for (const recipe of recipesInfos) {
   //Container
   const DIV_RECIPE_CONTAINER = document.createElement("div");
   DIV_RECIPE_CONTAINER.classList.add("recipe");
   DIV_RECIPE_CONTAINER.classList.add("recipe_block");

   //Image
   const RECIPE_IMG = document.createElement("img");
   RECIPE_IMG.classList.add("recipe_img");
   RECIPE_IMG.src = recipe.image;
   RECIPE_IMG.alt = recipe.title;

   //Infos
   const DIV_RECIPE_INFOS = document.createElement("div");
   DIV_RECIPE_INFOS.classList.add("recipe_infos");

   //Tags
   const DIV_RECIPE_TAGS = document.createElement("div");
   DIV_RECIPE_TAGS.classList.add("tags");

   //Each Tag
   for (const tag of recipe.tags) {
      const DIV_RECIPE_TAG = document.createElement("div");
      DIV_RECIPE_TAG.classList.add("tag", tag.toLowerCase());
      DIV_RECIPE_TAG.innerText = tag;
      DIV_RECIPE_TAGS.append(DIV_RECIPE_TAG);
   }

   //Title
   const DIV_RECIPE_DESCRIPTION = document.createElement("div");
   DIV_RECIPE_DESCRIPTION.classList.add("description");
   DIV_RECIPE_DESCRIPTION.innerText = recipe.title;

   // ? Add each div where they belong to (position)
   DIV_RECIPES.append(DIV_RECIPE_CONTAINER);
   DIV_RECIPE_CONTAINER.append(RECIPE_IMG, DIV_RECIPE_INFOS);
   DIV_RECIPE_INFOS.append(DIV_RECIPE_TAGS, DIV_RECIPE_DESCRIPTION);

   /* ----------------------------------------------------------- 
      * Create div's for MODALS and show HTML elements on CLICK
   --------------------------------------------------------------*/
   // ? HTML element for modals
   const MODAL = document.getElementById("modal");
   const OVERLAY = document.getElementById("background");

   // ? Create each modal div's on click event
   DIV_RECIPE_CONTAINER.addEventListener("click", () => {
      //Remove existing modal before creating a new one
      MODAL.innerHTML = "";

      //Show a background overlay under open modal
      OVERLAY.classList.remove("hidden");

      //Close button
      const DIV_MODAL_CLOSE = document.createElement("div");
      DIV_MODAL_CLOSE.classList.add("close");
      DIV_MODAL_CLOSE.innerText = "X";

      //Container
      const DIV_MODAL_CONTAINER = document.createElement("div");
      DIV_MODAL_CONTAINER.classList.add("modal-container");

      //Image
      const DIV_MODAL_IMG = document.createElement("div");
      DIV_MODAL_IMG.classList.add("modal-img");
      const MODAL_IMG = document.createElement("img");
      MODAL_IMG.src = recipe.image;
      MODAL_IMG.alt = recipe.title;

      //Modal tags
      const DIV_MODAL_RECIPE_TAGS = document.createElement("div");
      DIV_MODAL_RECIPE_TAGS.classList.add("modal-tags");

      //Modal each tag
      for (const modaltag of recipe.tags) {
         const DIV_MODAL_RECIPE_TAG = document.createElement("div");
         DIV_MODAL_RECIPE_TAG.classList.add("tag", modaltag.toLowerCase());
         DIV_MODAL_RECIPE_TAG.innerText = modaltag;
         DIV_MODAL_RECIPE_TAGS.append(DIV_MODAL_RECIPE_TAG);
      }

      //Modal recipe container
      const DIV_MODAL_RECIPE_CONTAINER = document.createElement("div");
      DIV_MODAL_RECIPE_CONTAINER.classList.add("modal-recipe-container");

      //Modal recipe title
      const DIV_MODAL_RECIPE_TITLE = document.createElement("div");
      DIV_MODAL_RECIPE_TITLE.classList.add("modal-recipe-title");
      DIV_MODAL_RECIPE_TITLE.innerText = recipe.title;

      //Modal recipe text
      const DIV_MODAL_RECIPE_TEXT = document.createElement("div");
      DIV_MODAL_RECIPE_TEXT.classList.add("modal-recipe-text");
      DIV_MODAL_RECIPE_TEXT.innerText = recipe.text;

      //Modal ingredients
      const DIV_MODAL_INGREDIENTS = document.createElement("div");
      DIV_MODAL_INGREDIENTS.classList.add("ingredients");

      /* 
      ? For each ingredient, retrieve name and image starting from the first element of ingNames array (index = 0) 
      ? to the end of the array (ing.Names.lenght) 
      */
      for (let i = 0; i < recipe.ingNames.length; i++) {
         const ingName = recipe.ingNames[i];
         const ingImg = recipe.ingImgs[i];

         //div.ingredient
         const DIV_MODAL_INGREDIENT = document.createElement("div");
         DIV_MODAL_INGREDIENT.classList.add("ingredient");

         //div.ingredient-name
         const DIV_INGREDIENT_NAME = document.createElement("div");
         DIV_INGREDIENT_NAME.classList.add("ingredient-name");
         DIV_INGREDIENT_NAME.innerText = ingName;

         //div.ingredient-img
         const DIV_INGREDIENT_IMG = document.createElement("div");
         DIV_INGREDIENT_IMG.classList.add("ingredient-img");
         const INGREDIENT_IMG = document.createElement("img");
         INGREDIENT_IMG.src = ingImg;
         INGREDIENT_IMG.alt = ingName;
         DIV_INGREDIENT_IMG.append(INGREDIENT_IMG);

         //Add name and image to ingredient div
         DIV_MODAL_INGREDIENT.append(DIV_INGREDIENT_IMG, DIV_INGREDIENT_NAME);

         //Add ingredient div to ingredients div
         DIV_MODAL_INGREDIENTS.append(DIV_MODAL_INGREDIENT);
      }

      // ? Add each div's to modals
      MODAL.classList.remove("hidden");
      MODAL.append(DIV_MODAL_CLOSE, DIV_MODAL_CONTAINER);
      DIV_MODAL_CONTAINER.append(DIV_MODAL_IMG, DIV_MODAL_RECIPE_CONTAINER);
      DIV_MODAL_IMG.append(MODAL_IMG, DIV_MODAL_RECIPE_TAGS);
      DIV_MODAL_RECIPE_CONTAINER.append(
         DIV_MODAL_RECIPE_TITLE,
         DIV_MODAL_RECIPE_TEXT,
         DIV_MODAL_INGREDIENTS
      );

      // ? Close modal on click event
      DIV_MODAL_CLOSE.addEventListener("click", () => {
         //Add hidden class to hide modal
         MODAL.classList.add("hidden");
         //Add hidden class to hide background
         OVERLAY.classList.add("hidden");
      });
   });
}
