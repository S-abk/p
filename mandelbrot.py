import numpy as np
import matplotlib.pyplot as plt
from PIL import Image

# Define image size and domain boundaries
WIDTH, HEIGHT = 800, 600
x_min, x_max = -2.0, 1.0
y_min, y_max = -1.5, 1.5

# Maximum number of iterations for each point
max_iterations = 100

def mandelbrot(c, max_iterations):
    z = 0
    for n in range(max_iterations):
        if abs(z) > 2:
            return n
        z = z*z + c
    return max_iterations

# Create an array to store pixel data
image = Image.new('RGB', (WIDTH, HEIGHT))
pixels = image.load()

# Generate Mandelbrot set image
for x in range(WIDTH):
    for y in range(HEIGHT):
        # Convert pixel coordinate to complex number
        c = complex(x_min + (x / WIDTH) * (x_max - x_min),
                    y_min + (y / HEIGHT) * (y_max - y_min))
        
        # Compute color based on iteration count
        m = mandelbrot(c, max_iterations)
        hue = int(255 * m / max_iterations)
        saturation = 255
        value = 255 if m < max_iterations else 0
        
        # Convert HSV to RGB and assign to pixel
        pixels[x, y] = tuple(int(i) for i in plt.cm.hsv(hue/255)[:3])

# Display the image using matplotlib
plt.imshow(image)
plt.title("Mandelbrot Set")
plt.axis('off')  # Turn off axis labels
plt.show()
