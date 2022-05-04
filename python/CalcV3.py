с = input('+, -, /, *: ')
if c in ('+', '-', '/', '*'):
    a = float(input('Первое число: '))
    b = float(input('Второе число: '))
    if c == '+':
        print(a+b)
    elif c == '-':
        print(a-b)
    elif c == '*':
        print(a*b)
    elif c == '/':
        print(a/b)
    else:
        print('Error')
