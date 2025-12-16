// recipes.mjs
const recipes = [
	{
		author: 'Provo High Culinary Students',
		url: '',
		isBasedOn: '',
		cookTime: '30 Min',
		datePublished: '2016-10-16',
		tags: ['Waffles', 'Sweet Potato', 'Side'],
		description: 'Savory waffles made with Sweet potato with a hint of Ginger',
		image: 'choc-cake.jpg',
		recipeIngredient: [
			'2 separated eggs',
			'1/4 C Oil',
			'1/4 tsp salt',
			'1/4 tsp Cayenne pepper',
			'3/4 C milk',
			'1 Tbsp Brown Sugar',
			'2 tsp Shredded Ginger',
			'3/4 C Mashed Sweet Potatoes',
			'1 Tbsp Minced Shallots',
			'1 Tbsp Baking Powder',
			'1 Tbsp Chives',
			'1/4 C Cornmeal',
			'1 C Flour'
		],
		name: 'Sweet Potato Waffles',
		prepTime: '30 Min',
		recipeInstructions: [
			'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.',
			'Next add the cornmeal, chives, and flour and baking powder',
			'Whip the egg whites until stiff and fold in',
			'Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey.'
		],
		recipeYield: '6 waffles',
		rating: 4
	},
	{
		author: 'Shane Thompson',
		url: '',
		isBasedOn: '',
		cookTime: '20 min',
		datePublished: '',
		tags: ['Chicken', 'Entree'],
		description:
			'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
		image: 'heart-cookie.jpg',
		recipeIngredient: [
			'2 Chicken Tenders, Cubed',
			'4 Mushrooms, Sliced',
			'1/2 C Whipping Cream',
			'1-2 Tbsp Stone Ground Mustard',
			'1 tsp Lemon Juice',
			'Salt and Pepper to taste',
			'1 C Rice, uncooked',
			'4-5 oz Fresh Green Beans'
		],
		name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
		prepTime: '10 min',
		recipeInstructions: [
			'Add 1 1/2 cups of water to a pan and bring to a boil.  Add the rice and reduce heat to low and simmer for 10-15 minutes or until all the moisture is gone.',
			'Cube chicken then cook over medium high heat in a fry pan, add the mushrooms about halfway through. (10 minutes). ',
			'Pour in cream, mustard and salt and pepper.  Stir.  On medium heat, simmer until it thickens (5 minutes)',
			'While preparing sauce: wash the beans, then trim the ends and snap (or cut) into 2in lengths.  In a sauce pan with a colander add about 1 cup water and steam the beans (10-15 minutes)',
			'Serve sauce over rice, with the Green beans on the side.'
		],
		recipeYield: '3 servings',
		rating: 4.5
	}
]

// This makes the 'recipes' the default export
export default recipes;