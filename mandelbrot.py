from joblib import Parallel, delayed
import numpy as np
from PIL import Image

def mandelbrot_point(c, max_iter):
    z = 0
    for n in range(max_iter):
        if abs(z) > 2:
            return n
        z = z*z + c
    return max_iter

def compute_row(y, width, height, max_iter):
    return [mandelbrot_point(complex(x/width*3 - 2, y/height*2 - 1), max_iter) 
            for x in range(width)]

width, height = 1000, 1000
max_iter = 1000

result = Parallel(n_jobs=-1)(delayed(compute_row)(y, width, height, max_iter) 
                             for y in range(height))

img = Image.fromarray(np.array(result).astype(np.uint8))
img.save('mandelbrot_joblib.png')
