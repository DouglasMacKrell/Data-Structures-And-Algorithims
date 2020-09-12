// Maximum Depth Of A Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root
// node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
//   /
//  8
// return its depth = 3.

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

// var maxDepth = function (root) {
//   let nodes = [];
//   let levelMarker = 1
//   let level = 0;
//   if (!root) {
//     return 0
//   }
//   if (!root.left && !root.right) {
//     return 1
//   }
//   const bfs = (node) => {
//     let q = [node];
//     while (q.length) {
//       let check = q.shift();
//       nodes.push(check.val)

//       if (nodes.length === levelMarker) {
//         console.log("check val:", check.val);
//         levelMarker = levelMarker * 2
//         level += 1;
//       }

//       if (check !== null) {
//         if (check.left) {
//           q.push(check.left);
//         } else {
//           nodes.push(null)
//         }
//         if (check.right) {
//           q.push(check.right);
//         } else {
//           nodes.push(null)
//         }
//       } 
//     }
//   };
//   bfs(root);
//   console.log("nodes", nodes);
//   return level;
// };

var maxDepth = function (root) {
  if (!root) return 0
  let leftHeight = maxDepth(root.left)
  let rightHeight = maxDepth(root.right)
  return Math.max(leftHeight, rightHeight) + 1
};

console.log(maxDepth(a));
