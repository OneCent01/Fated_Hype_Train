import {arrayPartialTransformation} from '../utils.js';
import {clearBoard} from '../utils.js';

const canvas = document.createElement('canvas');
canvas.height = '160'
canvas.width = '170'
const context = canvas?.getContext('2d');
const ctx = context;

const drawDogHead = (context, x, y) => {
  context.fillStyle = '#cc9258';
  const scale = 2;
  x *= scale;
  y *= scale;
  x -= 0;
  y -= 0;
  const xoff = x;
  const yoff = y;
  const ctx = context;
  context.scale(1/scale, 1/scale)
  ctx.beginPath();
  ctx.moveTo(168 + xoff, 163 + yoff);
  ctx.bezierCurveTo(168 + xoff, 171 + yoff, 171 + xoff, 175 + yoff, 174 + xoff, 179 + yoff);
  ctx.bezierCurveTo(181 + xoff, 188 + yoff, 227 + xoff, 180 + yoff, 242 + xoff, 177 + yoff);
  ctx.bezierCurveTo(259 + xoff, 174 + yoff, 275 + xoff, 171 + yoff, 277 + xoff, 167 + yoff);
  ctx.bezierCurveTo(281 + xoff, 159 + yoff, 276 + xoff, 117 + yoff, 266 + xoff, 110 + yoff);
  ctx.bezierCurveTo(254 + xoff, 101 + yoff, 228 + xoff, 104 + yoff, 219 + xoff, 116 + yoff);
  ctx.bezierCurveTo(209 + xoff, 129 + yoff, 216 + xoff, 132 + yoff, 209 + xoff, 138 + yoff);
  ctx.bezierCurveTo(203 + xoff, 143 + yoff, 178 + xoff, 148 + yoff, 170 + xoff, 155 + yoff);
  context.closePath();
  context.fill();
  context.setTransform(1, 0, 0, 1, 0, 0);
}

const drawDogEar = (context, x, y) => {
  context.fillStyle = '#c79e75';
  const scale = 3;
  x *= scale;
  y *= scale;
  x += 230;
  y += 60;
  const xoff = x;
  const yoff = y;
  const ctx = context;
  context.scale(1/scale, 1/scale)
  ctx.beginPath();
  ctx.moveTo(140 + xoff, 95 + yoff);
  ctx.bezierCurveTo(150 + xoff, 92 + yoff, 203 + xoff, 79 + yoff, 204 + xoff, 99 + yoff);
  ctx.bezierCurveTo(205 + xoff, 119 + yoff, 172 + xoff, 159 + yoff, 163 + xoff, 161 + yoff);
  ctx.bezierCurveTo(155 + xoff, 163 + yoff, 129 + xoff, 110 + yoff, 131 + xoff, 99 + yoff);
  context.closePath();
  context.fill();
  context.setTransform(1, 0, 0, 1, 0, 0);
}

const drawDogBody = (context, x, y) => {
  context.fillStyle = '#cc9258';
  const scale = 2;
  x *= scale;
  y *= scale;
  x += 50;
  y += 30;
  const xoff = x;
  const yoff = y;
  const ctx = context;
  context.scale(1/scale, 1/scale)
  ctx.beginPath();
  ctx.beginPath();
  ctx.moveTo(178 + xoff, 145 + yoff);
  ctx.bezierCurveTo(180 + xoff, 164 + yoff, 180 + xoff, 191 + yoff, 192 + xoff, 220 + yoff);
  ctx.bezierCurveTo(204 + xoff, 248 + yoff, 250 + xoff, 275 + yoff, 269 + xoff, 285 + yoff);
  ctx.bezierCurveTo(302 + xoff, 302 + yoff, 307 + xoff, 292 + yoff, 316 + xoff, 288 + yoff);
  ctx.bezierCurveTo(326 + xoff, 284 + yoff, 339 + xoff, 261 + yoff, 333 + xoff, 248 + yoff);
  ctx.bezierCurveTo(311 + xoff, 199 + yoff, 257 + xoff, 176 + yoff, 250 + xoff, 169 + yoff);
  ctx.bezierCurveTo(239 + xoff, 158 + yoff, 230 + xoff, 141 + yoff, 224 + xoff, 131 + yoff);
  context.closePath();
  context.fill();
  context.setTransform(1, 0, 0, 1, 0, 0);
}

const drawDogLeg = (context, x, y, color) => {
  context.fillStyle = color || '#c79e75';
  const scale = 2;
  x *= scale;
  y *= scale;
  x += 60;
  y += 100;
  const xoff = x;
  const yoff = y;
  const ctx = context;
  context.scale(1/scale, 1/scale)
  ctx.beginPath();
  ctx.moveTo(176 + xoff, 121 + yoff);
  ctx.bezierCurveTo(169 + xoff, 144 + yoff, 166 + xoff, 217 + yoff, 162 + xoff, 220 + yoff);
  ctx.bezierCurveTo(157 + xoff, 224 + yoff, 142 + xoff, 217 + yoff, 139 + xoff, 222 + yoff);
  ctx.bezierCurveTo(136 + xoff, 228 + yoff, 128 + xoff, 229 + yoff, 139 + xoff, 240 + yoff);
  ctx.bezierCurveTo(144 + xoff, 245 + yoff, 163 + xoff, 244 + yoff, 170 + xoff, 238 + yoff);
  ctx.bezierCurveTo(178 + xoff, 231 + yoff, 185 + xoff, 213 + yoff, 189 + xoff, 201 + yoff);
  ctx.bezierCurveTo(203 + xoff, 155 + yoff, 209 + xoff, 129 + yoff, 204 + xoff, 114 + yoff);
  ctx.bezierCurveTo(201 + xoff, 105 + yoff, 186 + xoff, 109 + yoff, 179 + xoff, 113 + yoff);
  context.closePath();
  context.fill();
  context.setTransform(1, 0, 0, 1, 0, 0);
}

const drawDogBackLeg = (context, x, y, color) => {
  context.fillStyle = color || '#c79e75';
  const scale = 3;
  x *= scale;
  y *= scale;
  x += 320;
  y += 280;
  const xoff = x;
  const yoff = y;
  const ctx = context;
  context.scale(1/scale, 1/scale)
  ctx.beginPath();
  ctx.moveTo(193 + xoff, 205 + yoff);
  ctx.bezierCurveTo(189 + xoff, 208 + yoff, 116 + xoff, 204 + yoff, 110 + xoff, 208 + yoff);
  ctx.bezierCurveTo(98 + xoff, 217 + yoff, 104 + xoff, 227 + yoff, 112 + xoff, 229 + yoff);
  ctx.bezierCurveTo(121 + xoff, 231 + yoff, 235 + xoff, 230 + yoff, 242 + xoff, 223 + yoff);
  ctx.bezierCurveTo(246 + xoff, 219 + yoff, 269 + xoff, 167 + yoff, 259 + xoff, 150 + yoff);
  ctx.bezierCurveTo(251 + xoff, 136 + yoff, 244 + xoff, 131 + yoff, 232 + xoff, 128 + yoff);
  ctx.bezierCurveTo(209 + xoff, 122 + yoff, 165 + xoff, 124 + yoff, 156 + xoff, 125 + yoff);
  ctx.bezierCurveTo(148 + xoff, 126 + yoff, 122 + xoff, 150 + yoff, 130 + xoff, 172 + yoff);
  ctx.bezierCurveTo(133 + xoff, 181 + yoff, 165 + xoff, 200 + yoff, 187 + xoff, 204 + yoff);
  context.closePath();
  context.fill();
  context.setTransform(1, 0, 0, 1, 0, 0);
}

const drawDogTail = (context, x, y, position, color, tailType) => {
  context.fillStyle = color || '#c79e75';
  const scale = 2;
  x *= scale;
  y *= scale;
  x += 280;
  y += 80;
  const xoff = x;
  const yoff = y;
  const ctx = context;
  context.scale(1/scale, 1/scale);
  ctx.beginPath();
  ctx.moveTo(94 + xoff, 225 + yoff);

  const percent = (position <= 50 ? position * 2 : (200 - (position * 2))) / 100

  let point1Start, point1End, point2Start, point2End;

  switch(tailType) {
    case 'straight':
      point1Start = [175 + xoff, 221 + yoff, 209 + xoff, 209 + yoff, 214 + xoff, 220 + yoff];
      point1End = [175 + xoff, 221 + yoff, 186 + xoff, 172 + yoff, 195 + xoff, 181 + yoff];
      point2Start = [218 + xoff, 229 + yoff, 177 + xoff, 238 + yoff, 96 + xoff, 242 + yoff];
      point2End = [200 + xoff, 186 + yoff, 177 + xoff, 238 + yoff, 96 + xoff, 242 + yoff];
      break;
    case 'erect':
      point1Start = [175 + xoff, 221 + yoff, 162 + xoff, 125 + yoff, 175 + xoff, 134 + yoff];
      point1End = [175 + xoff, 221 + yoff, 132 + xoff, 134 + yoff, 146 + xoff, 141 + yoff];
      point2Start = [186 + xoff, 142 + yoff, 177 + xoff, 238 + yoff, 96 + xoff, 242 + yoff];
      point2End = [161 + xoff, 148 + yoff, 177 + xoff, 238 + yoff, 96 + xoff, 242 + yoff];
      break;
    default:
      console.log(`[WARNING] Unsupported type: ${tailType}`)
  }

  const point1 = arrayPartialTransformation(point1Start, point1End, percent)
  ctx.bezierCurveTo(...point1);

  const point2 = arrayPartialTransformation(point2Start, point2End, percent)
  ctx.bezierCurveTo(...point2);

  context.closePath();
  context.fill();
  context.setTransform(1, 0, 0, 1, 0, 0);
}

export const drawDog = (mainContext, gameState, options) => {
  clearBoard(context);
  const [x, y] = [-84, -10];
  drawDogLeg(context, x - 5, y - 5, '#ad763e');
  drawDogBackLeg(context, x - 5, y - 5, '#ad763e');
  drawDogBody(context, x, y);
  drawDogHead(context, x, y);
  drawDogEar(context, x, y);
  drawDogLeg(context, x, y);
  drawDogBackLeg(context, x, y);
  drawDogTail(context, x, y, (options.tailStartPosition + gameState.progress * options.wagSpeed) % 100, options.color, options.tailType, options.tailStartPosition);

  const imageWidth = canvas.width * (options.scale || 1);
  const imageHeight = canvas.height * (options.scale || 1);
  const imageCenterX = options.x + (imageWidth / 2);
  const imageCenterY = options.y + (imageHeight / 2);

  mainContext.translate(imageCenterX, imageCenterY)
  mainContext.rotate(options.skew * (Math.PI / 180))

  mainContext.drawImage(canvas, -imageWidth/2, -imageHeight/2, imageWidth, imageHeight);

  mainContext.rotate(-(options.skew * (Math.PI / 180)))
  mainContext.translate(-imageCenterX, -imageCenterY)
}