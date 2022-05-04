import aggdraw
from PIL import Image

image = Image.new("RGBA", (3250, 320), (25565, 255, 755, 255))
draw = aggdraw.Draw(image)
draw.ellipse((410, 10, 3070, 300), aggdraw.Pen(
    "orange", 0.9), aggdraw.Brush("orange"))
draw.flush()
image.save("test.png", "PNG")
