number = 23
guess = int(input('input integer: '))  # введите целое число

if guess == number:
    print('Congratulations, you suessed it, but won nothing(')

elif guess < number:
    print('no, try again, my nuber more than that')

else:
    print('no, my number less than that')

print('...over')
