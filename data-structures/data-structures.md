# Data Structures


### Materials
| Material | Time |
|:---------|-----:|
| [Why Study Data Structures and Abstract Data Types?](https://interactivepython.org/runestone/static/pythonds/Introduction/WhyStudyDataStructuresandAbstractDataTypes.html) | reading |
| [Big O notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/) | reading |
| [Abstract Data Types](https://www.youtube.com/watch?v=HcxqzYsiJ3k) | 5:04 |
| [Introduction to stack](https://www.youtube.com/watch?v=F1F2imiOJfk) | 8:25 |
| [Array implementation of stack ](https://www.youtube.com/watch?v=sFVxsglODoo) | 13:08 |
| [Introduction to queue](https://www.youtube.com/watch?v=XuCbpw6Bj1U) | 9:18 |
| [Array implementation of queue ](https://www.youtube.com/watch?v=okr-XE8yTO8) | 14:58 |
| [Introduction to linked list ](https://www.youtube.com/watch?v=NobHlGUjV3g) | 17:12 |
| [Array vs linked list ](https://www.youtube.com/watch?v=lC-yYCOnN8Q) | 12:15 |
| [Introduction to trees ](https://www.youtube.com/watch?v=qH6yxkw0u78) | 15:49 |
| [Binary trees ](https://www.youtube.com/watch?v=H5JubkIy_p8) | 16:16 |
| [Binary search trees](https://www.youtube.com/watch?v=pYT9F8_LFTM) | 19:27 |

### Exercises

- Implement stack
    - functions:
        - `push(x)` -- push element x onto stack
        - `pop()` -- removes the element on top of the stack
        - `top()` -- get the top element
        - `empty()` -- return whether the stack is empty
    - exercises:
        - write a function that takes a list of characters and prints them in reverse order 
        - write a function that takes a positive integer and prints the binary
    representation of that integer.  Hint:  divide the integer by 2.
        - write a function that takes a list of `{` and `}` braces, and determines if is it correctly parenthesized. Hint:  for left delimiters, push onto stack; for right delimiters, pop from stack and check whether popped element matches right delimiter


- Implement queue
    - functions:
        - isempty() -- to check whether Queue is empty or not
        - isfull()  -- to check wheter Queue is full or not
        - enqueue(x) -- push element x onto queue
        - dequeue() -- removes element in queue from front end
        - front() -- returns element at front of queue
    - exercises: 
        - create the previous exercises again but use queue instead of stack

- Implement linked list
    - functions:
        - isempty() -- to check whether the list is empty or not
        - get(i) -- return the i. node
        - put(i) -- put element to the list
        - remove(i) -- remove the i. node
    - exercises:
        - write a count() function that counts the number of times a given int occurs in a list
        - write a length() function that iterates the list and returns it's length
        - write a sort() function that can sort a linked list

- Implement binary tree
    - functions:
        - insert(n) -- add a node with value n 
        - find(n) -- find a node with value n
        - delete(n) -- delete a node with value n 
    - exercises:
        - create a function that traverse a tree with inorder traversal
        - create a function that traverse a tree with postorder traversal
        - create a function that traverse a tree with preorder traversal
        
