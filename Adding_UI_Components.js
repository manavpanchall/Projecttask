// Create a button component in Figma
const button = figma.createRectangle();
button.resize(150, 40);
button.fills = [{ type: 'SOLID', color: { r: 0.2, g: 0.6, b: 0.8 } }];
figma.currentPage.appendChild(button);

// Add text to the button
const buttonText = figma.createText();
buttonText.characters = 'Click Me';
buttonText.fontSize = 16;
buttonText.x = button.x + 20;
buttonText.y = button.y + 10;
figma.currentPage.appendChild(buttonText);
