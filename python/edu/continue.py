while True:
    s = input('input something: ')
    if s == 'exit':
        break
    if len(s) < 3:
        print('too less')
        continue
    print('string is done')
