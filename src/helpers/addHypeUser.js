import {hexToDecimal, getRandomColor} from'./utils.js';

const canvas = document.getElementById('game_board');
const context = canvas?.getContext('2d');

export const addHypeUser = (user, sessionData) => {
  const text = [user.display_name];

  // here we break the text up if it's too long to fit on one cart
  let i = 0, 
    complete = false;

  while(!complete) {
    const {width} = context.measureText(text[i]);
    if(width < 74) {
      if(text[i+1]) {
        i++
      } else {
        complete = true;
      }
    } else {
      const finalLetter = text[i][text[i].length - 1];
      text[i+1] = finalLetter + (text[i+1] || '');
      text[i] = text[i].slice(0, text[i].length - 1);
    }
  }

  // get a random color if the user obejct doesn't have one;
  // if it does, convert it from hex to rgb
  let r, g, b;
  if(!user.color) {
    const rgb = getRandomColor();
    r = rgb.r;
    g = rgb.g;
    b = rgb.b;
  } else {
    const hexColor = user.color.slice(1);
    r = hexToDecimal(hexColor.slice(0, 2));
    g = hexToDecimal(hexColor.slice(2, 4));
    b = hexToDecimal(hexColor.slice(4, 6));
  }

  const color = `rgb(${r}, ${g}, ${b})`;
  const textColor = (r + g + b) > 124 ? 'black' : 'white';
  const tailStartPosition = Math.round(Math.random() * 100);
  const hypes = [];

  sessionData.hypeTrain.users[user.id] = { hypes, color, text, textColor, tailStartPosition };
}
