x = 50


def func():
    global x

    print('x = ', x)
    x = 2
    print('zamena x na', x)


func()
print('x = ', x)
