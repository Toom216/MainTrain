s = 'hello'
d = {}

try:
    print(1/5)
except (KeyError, IndexError):
    print('LookupError')
except ZeroDivisionError:
    print('ZeroDivisionError')
else:
    print('good')
finally:
    print('end')
