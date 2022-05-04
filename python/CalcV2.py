def function_a():
    global a, b
    a = 1
    b = 2
    return a+b


def function_b():
    c = 3
    return a+c+b


print(function_a())
print(function_b())
