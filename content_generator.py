import random

def random_email_generator(lenght):
    random_name = random.choice('abcdefghijklm').upper()
    for j in range(lenght):
        random_name += random.choice('abcdefghijklm')
    return random_name

def make_content_for_table(maximum):
    content = []
    for i in range(maximum):
        email = ''
        pair= {}
        name = random_email_generator(8)
        email += name.lower()
        email += '@'
        email += random_email_generator(5).lower()
        email += '.com'
        pair['name']=name
        pair['email']=email
        content.append(pair)
    return content