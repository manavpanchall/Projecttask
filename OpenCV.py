import cv2

# Load the sketch image
image = cv2.imread('sketch.png')

# Convert to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Apply edge detection to find UI elements
edges = cv2.Canny(gray, 50, 150)

# Display the edges
cv2.imshow('Edges', edges)
cv2.waitKey(0)
cv2.destroyAllWindows()

# Extract shapes and elements here (using contours, etc.)
