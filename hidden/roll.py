# from random import random, randint, choice

# stringSmall = "abcdefghijklmnopqrstuvwxyz"
# stringCaps = stringSmall.upper()

# basecash = 1000
# def russianRoulette(string__, size, tries):
#   while True:
#     tries+=1
#     if (string__ == "".join([choice(stringSmall) for _ in range(size)])):
#       print("You won! It took you " + str(tries) + " tries!")
#       print("CASH$$$: ",basecash+basecash*tries*1000)
#       break;

# betString = input("Enter the word that you are betting!: ")
# size = len(betString)
# tries = 0
# russianRoulette(betString, size, tries)

# from bcrypt import hashpw, gensalt

# def hashPassword(password):
#   return hashpw(password.encode(), gensalt())

# def decode(hash):
#   return hash.decode()

# password = input("Enter the password you want to hash: ")
# print("HAHS: ", hashPassword(password))

# print("DECODE: ", decode(hashPassword(password)))