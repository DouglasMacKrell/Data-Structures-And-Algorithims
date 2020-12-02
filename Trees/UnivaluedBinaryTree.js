// UNIVALUED BINARY TREE
// https://leetcode.com/problems/univalued-binary-tree/

// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

//       1
//     /  \
//   1      1
// /  \      \
// 1   1       1

// Input: [1,1,1,1,1,null,1]
// Output: true

//       2
//     /   \
//    2     2
//  /  \
// 5    2

// Input: [2,2,2,5,2]
// Output: false

// Note:

// The number of nodes in the given tree will be in the range [1, 100].
// Each node's value will be an integer in the range [0, 99].

// DOUG NOTES:

// - Do we need to build the tree from the given input, then traverse the tree to see
// if it is univalued?
// - Looks like I'll need to make a method to check after the tree has been created
// through a new function

// PLAN A

// - create node class
// - create tree class
// - create add method
//   - if node has no children
//     - add left
//   - if left, add right
//   - if both look right
//     - if rightnode has left and right - move left and try again
//     - else, move right and try again
// - create check method
//   - create currVal variable
//   - look at root value and assign it to currVal
//     - dig as left as you can go

// class Node {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

// class Tree {
//   constructor() {
//     this.root;
//   }

//   add(data) {
//     const node = this.root;
//     if (node == null) {
//       this.root = new Node(data);
//       return;
//     } else {
//       const addChild = (node) => {
//         if (node.left == null) {
//           node.left = new Node(data);
//         } else if (node.left != null && node.right == null) {
//           node.right = new Node(data);
//         } else if (node.left != null && node.right != null) {
//           if (node.left.left == null || node.left.right == null) {
//             return addChild(node.left);
//           } else {
//             return addChild(node.right);
//           }
//         }
//       };
//       return addChild(node);
//     }
//   }

//   checkTree() {
//     if (this.root == null) {
//       return null;
//     } else {
//       var result = true;
//       const traverseInOrder = (node) => {
//           if (node.left != null && node.data != node.left.data || node.right != null && node.data != node.right.data) {
//               result = false
//           }
//           if (node.left && node.data == node.left.data) {
//               traverseInOrder(node.left);
//           }
//           if (node.right && node.data == node.right.data) {
//               traverseInOrder(node.right)
//           }
//       };
//       traverseInOrder(this.root);
//       return result;
// //     }
// //   }
// // }

// checkTree(root) {
//   let check = root.data
//     let current = root;
//       const traverseInOrder = (node) => {
//           if (node.left != null && node.data != node.left.data || node.right != null && node.data != node.right.data) {
//               result = false
//           }
//           if (node.left && node.data == node.left.data) {
//               traverseInOrder(node.left);
//           }
//           if (node.right && node.data == node.right.data) {
//               traverseInOrder(node.right)
//           }
//       };
//       traverseInOrder(root);
//       return result;
//     return true;
// }

// checkTree(root) {
//   result = []
//   const inOrderSave(root) {
//   if (!root) return;

//   inOrderSave(root.left)
//   result.push(root.value)
//   inOrderSave(root.right)
// }
// for (let i = 0; i < result.length - 1; i++) {
//   if (result[i] != null && result[i + 1] != null && result[i] != result[i + 1]) {
//     return false
//   }
// }
// return true
// }

// const univaluedBinaryTreeCheck = (arr) => {
//   let treeCheck = new Tree();
//   for (let node of arr) {
//     treeCheck.add(node);
//   }
//   return treeCheck.checkTree();
// };

// const test1 = new Tree();

// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(4);
// test1.add(5)

// console.log(test1.checkTree())

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode(2);
let b = new TreeNode(2);
let c = new TreeNode(2);
let d = new TreeNode(5);
let e = new TreeNode(2);


a.left = b;
a.right = c;

b.left = d;
b.right = e;



var isUnivalTree = function (root) {
  let isUniVal = true;
  const traverse = (node) => {
    if (!node) return;
    if (node.left) {
      console.log("looking Left", node.value);
      if (node.value !== node.left.value) {
        console.log("gotcha left");
        isUniVal = false;
      }
    }

    if (node.right) {
        console.log("Looking Right", node.value);
        if (node.value !== node.right.value) {
            console.log("gotcha right");
            isUniVal = false;
        }
    }
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return isUniVal;
};

console.log(isUnivalTree(a));
