import {drawDogOnMotorcycle} from './shapes/dogOnMotorcycle.js'
import {drawDogOnCart} from './shapes/dogOnCart.js';
import {clearBoard} from './utils.js';

const updateGame = (context, sessionData, gameState) => {
  clearBoard(context);

  drawDogOnMotorcycle(context, gameState, {
    x: window.innerWidth - gameState.progress,
    y: -2
  });

  Object.entries(sessionData.hypeTrain.users).forEach(([userId, data], i) => {
    const x = window.innerWidth - gameState.progress + 148 + (i * 100);
    const y = window.innerHeight - 113;

    drawDogOnCart(context, gameState, {
      ...data,
      x,
      y,
    })
  })
}

export const gameLoop = (context, sessionData, gameState=getDefaultGameState()) => {
  gameState.progress += 1;
  updateGame(context, sessionData, gameState);

  const cartCount = Object.keys(sessionData.hypeTrain.users).length + 1;
  const finalCartPosition = window.innerWidth - gameState.progress + 148 + (cartCount * 100);

  if(finalCartPosition <= 0) {
    clearBoard(context);
    sessionData.hypeTrain.isRunning = false;
    gameState.progress = 0;
  } else {
    window.requestAnimationFrame(() => gameLoop(context, sessionData, gameState));
  }
}

const getDefaultGameState = () => ({
  continue: true,
  progress: 0,
});