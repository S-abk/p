import multiprocessing
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt

def mandelbrot_point(c, max_iter):
    z = 0
    for n in range(max_iter):
        if abs(z) > 2:
            return n
        z = z*z + c
    return max_iter

def compute_chunk(args):
    y_start, y_end, width, height, max_iter = args
    chunk = []
    for y in range(y_start, y_end):
        row = []
        for x in range(width):
            c = complex(x / width * 3 - 2, y / height * 2 - 1)
            m = mandelbrot_point(c, max_iter)
            row.append(m)
        chunk.append(row)
    return chunk

def parallel_mandelbrot(height, width, max_iter, num_processes):
    chunk_size = height // num_processes
    pool = multiprocessing.Pool(processes=num_processes)
    
    chunks = [(i*chunk_size, (i+1)*chunk_size, width, height, max_iter) 
              for i in range(num_processes)]
    
    results = pool.map(compute_chunk, chunks)
    return np.vstack(results)

# Parameters
height, width = 1000, 1500
max_iter = 1000
num_processes = multiprocessing.cpu_count()

# Compute Mandelbrot set
result = parallel_mandelbrot(height, width, max_iter, num_processes)

# Normalize and convert to image
normalized = (result - result.min()) / (result.max() - result.min())
img = Image.fromarray(np.uint8(plt.cm.viridis(normalized) * 255))

# Save and display the image
img.save('mandelbrot_parallel.png')
plt.imshow(img)
plt.axis('off')
plt.show()
