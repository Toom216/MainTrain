
x = 50


def func(x):
    print('x =', x)
    x = 2
    print('zamena local x na', x)


func(x)
print('x po prezhemu', x)
