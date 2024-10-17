// Obtener los elementos del DOM
const form = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');

// Array para almacenar recetas
let recipes = [];

// Evento al enviar el formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que la página se recargue

  // Obtener los valores de los inputs
  const name = document.getElementById('recipeName').value;
  const ingredients = document.getElementById('recipeIngredients').value;
  const instructions = document.getElementById('recipeInstructions').value;

  // Crear un objeto receta
  const newRecipe = {
    name: name,
    ingredients: ingredients,
    instructions: instructions
  };

  // Agregar la receta al array y actualizar la lista
  recipes.push(newRecipe);
  renderRecipes();

  // Limpiar el formulario
  form.reset();
});

// Función para mostrar las recetas en el DOM
function renderRecipes() {
  // Limpiar el contenido de la lista
  recipeList.innerHTML = '';

  // Mostrar cada receta
  recipes.forEach((recipe, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <p class="recipe-name">${recipe.name}</p>
      <p><strong>Ingredientes:</strong> ${recipe.ingredients}</p>
      <p><strong>Instrucciones:</strong> ${recipe.instructions}</p>
      <button onclick="deleteRecipe(${index})">Eliminar</button>
    `;

    recipeList.appendChild(li);
  });
}

// Función para eliminar una receta
function deleteRecipe(index) {
  recipes.splice(index, 1);
  renderRecipes();
}

// Guardar recetas en localStorage
function saveToLocalStorage() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
  
  // Cargar recetas de localStorage
  function loadFromLocalStorage() {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      recipes = JSON.parse(storedRecipes);
      renderRecipes();
    }
  }
  
  // Llamar a la función de cargar recetas al inicio
  loadFromLocalStorage();
  
  // Modificar renderRecipes y deleteRecipe para incluir el guardado
  function renderRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach((recipe, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <p class="recipe-name">${recipe.name}</p>
        <p><strong>Ingredientes:</strong> ${recipe.ingredients}</p>
        <p><strong>Instrucciones:</strong> ${recipe.instructions}</p>
        <button onclick="deleteRecipe(${index})">Eliminar</button>
      `;
      recipeList.appendChild(li);
    });
    saveToLocalStorage(); // Guardar en localStorage después de renderizar
  }