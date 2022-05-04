from tkinter import *


root = Tk()


class Window:
    root.title("Smth new")  # title of the window
    root.geometry("600x400+660+290")


class Menu:
    main_menu = Menu()
    main_menu.add_cascade(label="Menu")
    main_menu.add_cascade(label="Options")
    main_menu.add_cascade(label="About")
    root.config(menu=main_menu)


class Buttons:
    btn1 = Button(text="Hi Bro")
    btn2 = Button(text="Second")
    btn3 = Button(text="3d b54у54у5у4tn")
    btn4 = Button(text="4th btn")
    btn1.place(x=0, y=0, bordermode=INSIDE)
    btn2.place(x=50, y=0, bordermode=INSIDE)
    btn3.place(x=100, y=0, bordermode=INSIDE)
    btn4.place(x=150, y=0, bordermode=INSIDE)


root.mainloop()
