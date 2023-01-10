function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q, depth = 0) {
  console.log("Depth", depth);
  console.log("P is", p);
  console.log("Q is", q);
  if (!p || !q) {
    console.log("here 1");
    if ((p && !q) || (!p && q)) return false;
  } else if (p.val !== q.val) {
    console.log("here 2");
    return false;
  } else {
    console.log("here 3");
    return (
      isSameTree(p.left, q.left, depth + 1) &&
      isSameTree(p.right, q.right, depth + 1)
    );
  }
  console.log("here 4");
  console.log(p);
  console.log(q);
  return true;
};

const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p, q));

const p2 = new TreeNode(1, new TreeNode(2));
const q2 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(p2, q2));

// Clean version
// var isSameTree = function (p, q) {
//   if (!p || !q) {
//     // check if either p or q is null, or both are null
//     // if only one of them is null return false -> mismatch
//     // if both are null do nothing -> leaf reached
//     if ((p && !q) || (!p && q)) return false;
//   } else if (p.val !== q.val) {
//     // if values are not equal return false
//     return false;
//   } else {
//     // if both values are equal, go down the tree, depth first
//     // 'false' will propogate up the stack if either false condition is met down the tree
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
//   }

//   // catch the remaining true conditions, as all false conditions would have been caught above
//   return true;
// };
