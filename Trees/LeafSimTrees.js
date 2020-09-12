// Leaf-Similar Trees
// https://leetcode.com/problems/leaf-similar-trees/

// Consider all the leaves of a binary tree, from left to right order,
// the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Example 1:

// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true
// Example 2:

// Input: root1 = [1], root2 = [1]
// Output: true
// Example 3:

// Input: root1 = [1], root2 = [2]
// Output: false
// Example 4:

// Input: root1 = [1,2], root2 = [2,2]
// Output: true

// Example 5:

// Input: root1 = [1,2,3], root2 = [1,3,2]
// Output: false

// Constraints:

// The number of nodes in each tree will be in the range [1, 200].
// Both of the given trees will have values in the range [0, 200].

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root1
//  * @param {TreeNode} root2
//  * @return {boolean}
//  */

//           a  b  c  d  e  f  g              h  i
// (root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
//             m  n  o  p  q  r  s                                      t  u
//   (root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]);

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode(3);
let b = new TreeNode(5);
let c = new TreeNode(1);
let d = new TreeNode(6);
let e = new TreeNode(2);
let f = new TreeNode(9);
let g = new TreeNode(8);
let h = new TreeNode(7);
let i = new TreeNode(4);

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

e.left = h;
e.right = i;

let m = new TreeNode(3);
let n = new TreeNode(5);
let o = new TreeNode(1);
let p = new TreeNode(6);
let q = new TreeNode(7);
let r = new TreeNode(4);
let s = new TreeNode(2);
let t = new TreeNode(9);
let u = new TreeNode(8);

m.left = n;
m.right = o;

n.left = p;
n.right = q;

o.left = r;
o.right = s;

s.left = t;
s.right = u;

var leafSimilar = function (root1, root2) {
  let tree1 = [];
  let tree2 = [];
  let isSimilar = true;
  const postOrder1 = (node) => {
    if (!node) return;

    postOrder1(node.left);
    postOrder1(node.right);
    if (!node.left && !node.right) {
      tree1.push(node.val);
    }
  };
  const postOrder2 = (node) => {
    if (!node) return;

    postOrder2(node.left);
    postOrder2(node.right);
    if (!node.left && !node.right) {
      tree2.push(node.val);
    }
  };
  postOrder1(root1)
  postOrder2(root2)
  console.log("tree1", tree1)
  console.log("tree2", tree2)
  for (let i = 0; i < tree1.length; i++) {
    if (tree1.length !== tree2.length) {
      isSimilar = false;
    }
    if (tree1[i] !== tree2[i]) {
      isSimilar = false;
    }
  }
  return isSimilar;
};

console.log(leafSimilar(a, m));
