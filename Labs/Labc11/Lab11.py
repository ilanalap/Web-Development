first=input("What is your first name? ")
last=input("What is your last name? ")
age=input("How old are you?")
teach=input("How long have you been teaching?")
full_name= first + " " + last
print("Hi, my name is " +full_name+ ". I am " +str(age)+ " and I've been teaching for " +str(teach)+ " years.")
#how to calculate in line#
x= int(input("What is your age?")) - 21
print("I turned twenty-one, " +str(x)+ " years ago.")
#calculate when they turned 21 when referring back to the function#
x= int(age) - 21
print("I turned twenty-one, " +str(x)+ " years ago.")