import {drawMotorcycle} from './motorcycle.js';
import {drawDog} from './dog.js';

const tailStartPosition = Math.round(Math.random() * 100);

export const drawDogOnMotorcycle = (context, gameState, options) => {
  const motorcycleScale = 1;
  const motorcycleHeight = 73;
  
  drawMotorcycle(context, gameState, {
    x: options.x, 
    y: options.y + window.innerHeight - (motorcycleHeight * motorcycleScale),
    scale: motorcycleScale,
  });

  drawDog(context, gameState, {
    x: options.x + 60,
    y: options.y + window.innerHeight - 132,
    scale: 1/2,
    skew: -5,
    tailType: 'straight',
    wagSpeed: 1,
    tailStartPosition,
  });
}