// figma-plugin-code.js
figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type === 'create-design') {
    const nodes = [];
    
    // Create a simple rectangle as an example output
    const rect = figma.createRectangle();
    rect.resize(100, 100);
    rect.fills = [{ type: 'SOLID', color: { r: 0.5, g: 0.5, b: 1 } }];
    figma.currentPage.appendChild(rect);
    nodes.push(rect);

    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);

    // Close the plugin after creation
    figma.closePlugin();
  }
};
