import time
r=float
print ("**Welcome **\n")
z=input("Do you want to open an account [yes/no] ")
if z=="yes":
    print ("Thankyou for choosing us \n Please Enter asked credencials for creating account !")
else:
    print("See you later  Bye !")
    exit()
a=str(input("Enter your name : "));
while True:
    b=int(input("Enter your Age :"))
    if b<18:
        print ("You cannot open an account !!")
        exit()
    elif b>=100:
        print("Sorry invalid age ")
        continue
    else :
        break


    

    
while True:
    c=(input("Enter your phone number [Nepal :+977]:"))
    if len (c) <=11 and  c.isdigit():
        print("")
        break
    else :
        print("Invalid number !!! \n Try again \n")
u=0
s=str(input("Enter Your address : "))
print("Verifying name....")
time.sleep(3)
print("Name verified ☑")
print("Verifying Age...")
time.sleep(3)
print("Age verified ☑")
print ("Verifying phone number...")
time.sleep(3)
print("Verified phone number ☑")
print("Verifying Address..")
time.sleep(3)
print("Address Verified ☑")
print("Creating Account... ")
time.sleep(4)
print("       Account created sucessfully ☑ ")
print("** Account Information **\n")
print("Name = ", a,"                                              Balance : ",u,"\n Account no : 123456789 \n", "Phone Number=", c,"\n","Address=" , s )
j=int(input("\n 1> Add balance \n 2> Withdraw money \n 3> exit    : "))
while True:
    if j==1:
        d=float(input("Enter amount of money to be added in the account : "))
        print ("\n Rs" ,d," will be added to your account ")
        u+=d
        print("Adding balance ...")
        time.sleep(3)
        print("Added Rs ",d,"Sucessfully to your account ☑")

        l=int(input("Enter 0 to go back to main menu : "))
        if l==0:
            print("** Account Information **\n")
            print("Name = ", a,"                                              Balance : ",u,"\n Account no : 123456789 \n", "Phone Number=", c,"\n","Address=" , s )
            j=int(input("\n 1> Add balance \n 2> Withdraw money \n 3> exit   : "))
    elif j==2 :
        e=float((input("Enter Amount you want to withdraw from your account : ")))
        f=u-e
        v=int(input("Enter your E-sewa Id :"))
        print("Sending money to ",v)
        time.sleep(2)
        print("Withdrawing money....")
        time.sleep(4)
        print("Withdrawn Money Sucessfuly ☑")
        h=int(input("\n Enter 0 to go back to main menu : "))
        if h==0:
            print("** Account Information **\n")
            print("Name = ", a,"                                              Balance : ",f,"\n Account no : 123456789 \n", "Phone Number=", c,"\n","Address=" , s )
            j=int(input("\n 1> Add balance \n 2> Withdraw money \n 3> exit    : "))
        else:
            print("Bye !!   Have a nice day !")
    else :
        exit()







