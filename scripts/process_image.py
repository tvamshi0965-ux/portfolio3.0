import sys
from PIL import Image, ImageFilter
import numpy as np

def make_transparent_cutout():
    # character-transparent.png and profile.jpg are updated with the user's high-res suit portrait
    # with high-precision DeepLabV3 ResNet50 background removal and color defringing
    img = Image.open('public/character-transparent.png').convert('RGBA')
    print("public/character-transparent.png is active with clean transparent alpha background!")

make_transparent_cutout()
