const { Recipe } = require('../models');

const recipedata = [
  {
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Lunch",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]
  },
  {
    "title": "Burger ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Dinner",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "Pancakes",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Breakfast",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "French toast ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Breakfast",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "Lasagnia",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Dinner",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "Dynamite Prawns ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Appetizer",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "Spicy Fish ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Appetizer",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "Cheese Pizza ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Lunch",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Lunch",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Lunch",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Lunch",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Lunch",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  },
  {
    "title": "Chicken Grilled Sandwich ",
    "description": "Tomorrow at 11:30",
    "id": "97xboo0ktkylpom",
    "imageUrl": "",
    "category": "Lunch",
    "ingredients": ["eggs", "sugar"],
    "instructions":["Take two cup water", "add it to a flour"]

  }
  
];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;