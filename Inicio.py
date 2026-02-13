# comentario de una sola linea
# otro comentario 
""" este es de varias lineas 
porque se abre con tres comillas dobles y se cierra con otras tres"""

#variables 
x=1
print(x)
X='hola'
print(x)
print(X)
Y= 15.04
print(type(x))
print(type(X))
print(type(Y))
print(type("07.03"))

#casting
var1= int(3)
var2= str(3)
var3= float(3)
print(type(var1)), (var1)
print(type(var2)), (var2)
print(type(var3)), (var3)

A= 5
B= 10.52
print(type(A))
print(type(B))
C = A + B
print(type(C), C)


####################
# El casting es convertir variables a otro tipo
# int("6")
# float("5.6")
# srt(5)
N=5
M="6"
M= int(M)
print("El resultado de sumar N y M es:", N + M)
print(type(M))

######## Input
a= int(input("por favor ingresar un numero:"))
print(type(a), a)

############Operadores numericos
a=3
a= a + 2
print(a)
a+=2
print(a)

b=5
c=6
print(b>=c)

numero = int(input("Ingrese un numero:"))
print("El numero es mayor a 10 y menor que 20 ", numero>10 and numero <20)


