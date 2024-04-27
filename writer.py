colors = [
    {"medium-red-violet": {
        50: "#fdf6fb",
        100: "#fbecf8",
        200: "#f7d7f1",
        300: "#efb8e2",
        400: "#e58dd0",
        500: "#d461b7",
        600: "#b34094",
        700: "#98337b",
        800: "#7c2c64",
        900: "#662952",
        950: "#421032",
      }},
      {"pelorous": {
        50: "#edfefd",
        100: "#d2fbfa",
        200: "#abf6f4",
        300: "#72eeec",
        400: "#31dfdf",
        500: "#15c2c5",
        600: "#16a8b2",
        700: "#187d86",
        800: "#1c656e",
        900: "#1c535d",
        950: "#0c3840",
      },},
      { "tree-poppy": {
        50: "#fff8eb",
        100: "#fde9c8",
        200: "#fbd38c",
        300: "#f9b650",
        400: "#f79c28",
        500: "#f1790f",
        600: "#d5560a",
        700: "#b1390c",
        800: "#902c10",
        900: "#762611",
        950: "#441004",
      },},
      {"lochmara": {
        50: "#f2f8fd",
        100: "#e3effb",
        200: "#c2dff5",
        300: "#8bc4ee",
        400: "#4ea6e2",
        500: "#2584c6",
        600: "#186eb1",
        700: "#15588f",
        800: "#154b77",
        900: "#173f63",
        950: "#0f2942",
      },}
]

from time import sleep
from pyautogui import write

def write_colors():
    sleep(2)
    # for color in clors:
    color = colors[3]
    colorName = list(color.keys())[0]
    print("colr name", colorName)
    #  <div className=" w-48 h-10 text-white flex justify-center items-center">
    #       <span>#1237686</span>
    #     </div>
    for i in color[colorName]:
        write(f'<div className=" w-48 h-10 text-white flex justify-center items-center bg-[{color[colorName][i]}]">\n<span>{color[colorName][i]}\n</span>\n</div>\n')
    # print(f'<div className=" w-48 h-10 text-white flex justify-center items-center bg-{colorName}-500">')

write_colors()