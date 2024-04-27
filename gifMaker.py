import glob
from PIL import Image

# filepaths
fp_in = r"C:\Users\hp\Documents\Projects\cropped\*.png"
fp_out = r"C:\Users\hp\Documents\Projects\cropped\output.gif"

# https://pillow.readthedocs.io/en/stable/handbook/image-file-formats.html#gif
frames = [Image.open(f) for f in sorted(glob.glob(fp_in))]
frame_one = frames[0]
frame_one.save(fp=fp_out, format="GIF", append_images=frames[1:], save_all=True, duration=100,transparency=0)
# img.save(fp=fp_out, format="GIF", append_images=imgs, save_all=True, duration=100, loop=0)
# img.save(fp=fp_out, format="GIF", append_images=imgs, save_all=True, duration=3833, loop=0, transparency=0) # for transparency