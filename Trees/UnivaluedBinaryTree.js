UNIVALUED BINARY TREE 
https://leetcode.com/problems/univalued-binary-tree/


A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

      1
    /  \
  1      1
/  \      \
1   1       1

Input: [1,1,1,1,1,null,1]
Output: true

      2
    /   \
   2     2
 /  \
5    2

Input: [2,2,2,5,2]
Output: false

Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].


DOUG NOTES: 

- Do we need to build the tree from the given input, then traverse the tree to see
if it is univalued? 
- Looks like I'll need to make a method to check after the tree has been created
through a new function

PLAN A 

- create node class 
- create tree class 
- create add method 
  - if node has no children
    - add left 
  - if left, add right 
  - if both look right 
    - if rightnode has left and right - move left and try again
    - else, move right and try again
- create check method
  - create currVal variable
  - look at root value and assign it to currVal
    - dig as left as you can go


