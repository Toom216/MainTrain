number = 23
running = True

while running:
    guess = int(input('Vvedi celoe 4islo: '))

    if guess == number:
        print('Ugadal')
        running = False
    elif guess < number:
        print("Ne ugadal, poprobui bol'she")
    else:
        print("Ne ugadal, poprobui men'she")
else:
    print('Konets')
