import {drawDog} from './dog.js';
import {drawCart} from './cart.js';

export const drawDogOnCart = (context, gameState, options) => {
	options = {
		...options,
		x: options.x + 5,
		y: options.y + 25,
	}
	drawDog(context, gameState, {
		x: options.x + 2,
		y: options.y - 40,
		tailStartPosition: options.tailStartPosition,
	    scale: 1/2,
	    tailType: 'erect',
	    wagSpeed: 1,
	});
	drawCart(context, gameState, options);
}