import multiprocessing
import numpy as np
from PIL import Image

def mandelbrot(h, w, max_iter):
    y, x = np.ogrid[-1.4:1.4:h*1j, -2:0.8:w*1j]
    c = x + y*1j
    z = c
    divtime = max_iter + np.zeros(z.shape, dtype=int)
    
    for i in range(max_iter):
        z = z**2 + c
        diverge = z*np.conj(z) > 2**2
        div_now = diverge & (divtime == max_iter)
        divtime[div_now] = i
        z[diverge] = 2
    
    return divtime

def compute_chunk(args):
    y_start, y_end, width, max_iter = args
    return mandelbrot(y_end - y_start, width, max_iter)

def parallel_mandelbrot(height, width, max_iter, num_processes):
    chunk_size = height // num_processes
    pool = multiprocessing.Pool(processes=num_processes)
    
    chunks = [(i*chunk_size, (i+1)*chunk_size, width, max_iter) 
              for i in range(num_processes)]
    
    results = pool.map(compute_chunk, chunks)
    return np.vstack(results)

# Usage
height, width = 1000, 1500
max_iter = 1000
num_processes = multiprocessing.cpu_count()

result = parallel_mandelbrot(height, width, max_iter, num_processes)

# Convert to image and save
img = Image.fromarray(np.uint8(result * 255 / np.max(result)))
img.save('mandelbrot_parallel.png')
