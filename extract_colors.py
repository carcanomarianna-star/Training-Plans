from PIL import Image
import sys

img = Image.open('image.png')
img = img.convert('RGB')
width, height = img.size

# Sample points across the color bar
# Looking at the image, there are 7 color blocks.
# Let's sample along the middle y-axis
y = height // 2

colors = []
for i in range(7):
    x = int((i + 0.5) * (width / 7))
    r, g, b = img.getpixel((x, y))
    hex_color = "#{:02x}{:02x}{:02x}".format(r, g, b)
    colors.append(hex_color)

print("Colors:", colors)
