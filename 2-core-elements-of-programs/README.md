# 2. Core Elements of Programs

## Slides

| [Link](https://docs.google.com/viewer?url=https%3A%2F%2Fgithub.com%2Fdylan-wu%2FMITx-6.00.1x-Introduction-to-Computer-Science-and-Programming-Using-Python%2Fblob%2Fmaster%2F1-introduction-to-python%2Flec1.pdf%3Fraw%3Dtrue&embedded=true) | <details><summary>Display</summary><iframe src="//www.slideshare.net/slideshow/embed_code/key/lgg7U3HnfBcrJP" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen > </iframe> </details> |
|-|-|

## Videos

| [Playlist (1:03:12) ](https://www.youtube.com/watch?v=4MbDZho3pIY&list=PL4zlr9pvbVceptzqKh1UprbFX6OETPpVQ) | <details><summary>Display</summary><iframe width="650px" height="450" src="https://www.youtube.com/embed/videoseries?list=PL4zlr9pvbVceptzqKh1UprbFX6OETPpVQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </details> |
|-|-|

Notes

1. [Bindings (9:41)](https://youtu.be/sKSZJn0VGHg)
   <details><summary>Notes</summary>
   </details>
2. [Strings (5:34)](https://youtu.be/N1vckuZk9AE)
   <details><summary>Notes</summary>
   <p>
   </p>
   </details>
3. [Input/Output (9:03)](https://youtu.be/uGGAxqVdETM)
   <details><summary>Notes</summary>
   <p>
   </p>
   </details>
4. [IDEs (8:37)](https://youtu.be/vR3q6aW5L28)
   <details><summary>Notes</summary>
   <p>
   </p>
   </details>
5. [Control Flow (11:25)](https://youtu.be/idRDTAUV8uY)
   <details><summary>Notes</summary>
   <p>
   </p>
   </details>
6. [Iteration (5:51)](https://youtu.be/22WtQAUFvtM)
   <details><summary>Notes</summary>
   <p>
   </p>
   </details>
7. [Guess and Check (13:01)](https://youtu.be/gkID44RVLkI)
   <details><summary>Notes</summary>
   <p>
   </p>
   </details>

## Handout

- cubeRoot.py

``` python
# -*- coding: utf-8 -*-
"""
Created on Wed Jun  8 11:38:19 2016

@author: ericgrimson
"""

x = int(input('Enter an integer: '))
ans = 0
while ans**3 < x:
    ans = ans + 1
if ans**3 != x:
    print(str(x) + ' is not a perfect cube')
else:
    print('Cube root of ' + str(x) + ' is ' + str(ans))
27
```
- cubeRootGuessCheck.py

``` python
# -*- coding: utf-8 -*-
"""
Created on Wed Jun  8 11:40:08 2016

@author: ericgrimson
"""

cube = 28
for guess in range(cube+1):
    if guess**3 == cube:
        print("Cube root of", cube, "is", guess)
```

- CubeRootGuessCheckBetter.py

``` python
# -*- coding: utf-8 -*-
"""
Created on Wed Jun  8 11:41:14 2016

@author: ericgrimson
"""

cube = -28
for guess in range(abs(cube)+1):
    if guess**3 >= abs(cube):
        break
if guess**3 != abs(cube):
    print(cube, 'is not a perfect cube')
else:
    if cube < 0:
        guess = -guess
    print('Cube root of ' + str(cube) + ' is ' + str(guess))
```

- iterativeMul.py

``` python
# -*- coding: utf-8 -*-
"""
Created on Wed Jun  8 11:23:28 2016

@author: ericgrimson
"""

x = 5
ans = 0
itersLeft = x
while (itersLeft != 0):
    ans = ans + x
    itersLeft = itersLeft - 1
print(str(x) + '*' + str(x) + ' = ' + str(ans))
```

- mysum.py

``` python
# -*- coding: utf-8 -*-
"""
Created on Wed Jun  8 11:21:27 2016

@author: ericgrimson
"""

mysum = 0
for i in range(5, 11, 2):
    mysum += i
    if mysum == 5:
        break 
print(mysum)
```

- printExample.py

``` python
# -*- coding: utf-8 -*-
"""
Created on Wed Jun  8 11:14:34 2016

@author: ericgrimson
"""

x = 1
print(x)
x_str = str(x)
print("my fav num is", x, ".", "x =", x)
print("my fav num is " + x_str + ". " + "x = " + x_str)
```

## Excercises

[Question & Anansers](https://github.com/dylan-wu/MITx-6.00.1x-Introduction-to-Computer-Science-and-Programming-Using-Python/issues/2)
