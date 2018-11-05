import random


def random_email_generator(lenght):
    random_name = random.choice('abcdefghijklm').upper()
    for j in range(lenght):
        random_name += random.choice('abcdefghijklm')
    return random_name


def birthdate_generator():
    year_fist = random.randint(19, 20)
    if year_fist == 19:
        year_second = random.randint(42, 99)
    else:
        year_second = random.randint(0, 18)
        if year_second < 10:
            year_second = '0' + str(year_second)
    return int(str(year_fist) + str(year_second))


def make_content_for_table(rows, name_lenght, email_lenght):
    content = []
    for i in range(rows):
        email = ''
        pair = {}
        name = random_email_generator(name_lenght)
        email += name.lower()
        email += '@'
        email += random_email_generator(email_lenght).lower()
        email += '.com'
        dob = birthdate_generator()
        pair['name'] = name
        pair['email'] = email
        pair['dob'] = dob
        content.append(pair)
    return content
