export const drawWheel = (context, gameState, options) => {
  context.lineWidth = options.lineWidth;

  const [wheelCenterX, wheelCenterY] = [options.x - (options.radius / 2), options.y - (options.radius / 2)]
  context.save();
  context.translate(wheelCenterX, wheelCenterY)

  context.rotate(((gameState.progress * options.rotationSpeed) % 360) * (Math.PI / 180))
  
  context.beginPath()
  context.moveTo(0, 0 - ((options.lineWidth * 2) + (options.radius / 2)))
  context.lineTo(0, (options.lineWidth * 2) + (options.radius / 2))
  context.stroke()
  
  context.rotate(Math.PI / 3)
  
  context.beginPath()
  context.moveTo(0, 0 - ((options.lineWidth * 2) + (options.radius / 2)))
  context.lineTo(0, (options.lineWidth * 2) + (options.radius / 2))
  context.stroke()
  
  context.rotate(Math.PI / 3)
  
  context.beginPath()
  context.moveTo(0, 0 - ((options.lineWidth * 2) + (options.radius / 2)))
  context.lineTo(0, (options.lineWidth * 2) + (options.radius / 2))
  context.stroke()

  context.translate(0 - wheelCenterX, 0 - wheelCenterY);

  context.beginPath();
  context.arc(options.x - (options.radius / 2), options.y - (options.radius / 2), options.radius - options.lineWidth, 0, 2 * Math.PI);
  context.stroke();
  
  context.restore();
}