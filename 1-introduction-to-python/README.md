# 1. Introduction to Python

## Slides

| [Link](https://docs.google.com/viewer?url=https%3A%2F%2Fgithub.com%2Fdylan-wu%2FMITx-6.00.1x-Introduction-to-Computer-Science-and-Programming-Using-Python%2Fblob%2Fmaster%2F1-introduction-to-python%2Flec1.pdf%3Fraw%3Dtrue&embedded=true) | <details><summary>Display</summary><iframe src="//www.slideshare.net/slideshow/embed_code/key/lgg7U3HnfBcrJP" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen /> </details> |
|-|-|

## Videos

Playlist (1:03:12)
[ Link ](https://www.youtube.com/watch?v=4MbDZho3pIY&list=PL4zlr9pvbVceptzqKh1UprbFX6OETPpVQ) | <details><summary>Display</summary><iframe width="650px" height="450" src="https://www.youtube.com/embed/videoseries?list=PL4zlr9pvbVceptzqKh1UprbFX6OETPpVQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </details> |
|-|-|

Notes:

<a href="https://youtu.be/Xwf4DkNlIPA">1. [Overview of Course (9:41)]</a>

2. [Knowledge (5:34)](https://youtu.be/4MbDZho3pIY)
3. [Machines (9:03)](https://youtu.be/gJKQ3eNAxG8)
4. [Languages (8:37)](https://youtu.be/9oYFH4OmYDY)
5. [Types (11:25)](https://youtu.be/XIjrEt2lz1U)
6. [Variables (5:51)](https://youtu.be/z2NLjdfxEyQ)
7. [Operators and Branching (13:01)](https://youtu.be/8vr3nyg5QcM)

## Handout

- evenOdd.py

[Video: 7. Operators and Branching (3:45)](https://youtu.be/8vr3nyg5QcM?t=350)

``` python
# -*- coding: utf-8 -*-
"""
Created on Wed Jun  8 11:03:23 2016

@author: ericgrimson
"""

x = int(input('Enter an integer: '))
if x%2 == 0:
    print('')
    print('Even')
else:
    print('')
    print('Odd')
print('Done with conditional')
```

- foo.py

``` python
# -*- coding: utf-8 -*-
"""
Created on Wed Jun 15 09:15:09 2016

@author: ericgrimson
"""

x = 6

if x != 5:
    print('i am here')
else:
    print('no I am not')
```

- nestedConds.py

``` python
# -*- coding: utf-8 -*-
"""
Created on Wed Jun  8 11:07:33 2016

@author: ericgrimson
"""

if x%2 == 0:
    if x%3 == 0:
        print('Divisible by 2 and 3')
    else:
        print('Divisible by 2 and not by 3')
elif x%3 == 0:
    print('Divisible by 3 and not by 2')
```

## Excercises

[Question & Anansers](https://github.com/dylan-wu/MITx-6.00.1x-Introduction-to-Computer-Science-and-Programming-Using-Python/issues/2)
