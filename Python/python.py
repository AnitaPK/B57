# print("Hello World")
# # name = "Anita"
# name = input("Enter name")
# print(name)

# num1 = int(input("Enter number to check odd Even : "))
# if(num1%2 == 0):
#     print("Number is even")
# else:
#     print("Number is odd")

# user = {"Name":"User", "Mobile_Number":"1234567890", "city":"Chiplun"}

# print('Hello ', user["Name"], '. Your Contact number is ', user["Mobile_Number"], ' . You live in ', user["city"])

loggedUserEmail = 'admin@gmail.com'
loggedUserPassword = 'admin'

# email = input("Enter Email")
# password = input("Enter password")

# if(email == loggedUserEmail):
#     if(password == loggedUserPassword):
#         print("loggin true")
#     else:
#         print("Password incorrect")
# else:
#     print("Credentials are wrong")

numList = [1,2,3,4,5]

index = 0
lenght = len(numList)
total = 0

while index < lenght:
    total = total + numList[index]
    index += 1

print(total)

# for i in range(1,11):
#     print("3 * ", i, " = ", 3*i)

for i in range(11):
    if(i == 5):
        # break
        continue
        # pass
    print(i)

total = 0
number = 0
while total < 100:
    total += number
    number +=1

print(total)
print(number)

#          total    number
# 1st      0         0
# 2        1         1
# 3        3         2
# 4        6         3
# 5        10        4
# 6        15        5
# 7        21        6
# 8        28        7
# 9        36        8
# 10       44        9
# 11       54       10
# 12       65       11
# 13       77       12
# 14       90       13
# 15       104      14

x = 6

square = lambda x: x*x

# const square = (x) => x*x 