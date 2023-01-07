/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var addTwoNumbers = function (l1, l2) {
  const a1 = [];
  const a2 = [];

  let n1 = l1;
  let n2 = l2;
  while (n1 || n2) {
    if (n1) {
      a1.push(n1.val);
      n1 = n1.next;
    }
    if (n2) {
      a2.push(n2.val);
      n2 = n2.next;
    }
  }

  const maxLength = Math.max(a1.length, a2.length);
  const array = new Array(maxLength).fill(null);
  let carry = 0;
  const intermediateArray = array.map((e, i) => {
    const subtotal = (a1[i] || 0) + (a2[i] || 0);
    if (subtotal + carry > 9) {
      const tempCarry = carry;
      carry = 1;
      return subtotal + tempCarry - 10;
    } else {
      const tempCarry = carry;
      carry = 0;
      return subtotal + tempCarry;
    }
  });
  if (carry === 1) {
    intermediateArray.push(1);
  }

  let lastNode = undefined;
  for (let i = intermediateArray.length - 1; i >= 0; i--) {
    const temp = lastNode;
    lastNode = new ListNode(intermediateArray[i], temp);
  }
  return lastNode;
};

// var addTwoNumbers = function (l1, l2) {
//   const maxLength = Math.max(l1.length, l2.length);
//   const array = new Array(maxLength).fill(null);
//   let carry = 0;
//   const output = array.map((e, i) => {
//     const subtotal = (l1[i] || 0) + (l2[i] || 0);
//     if (subtotal + carry > 9) {
//       const tempCarry = carry;
//       carry = 1;
//       return subtotal + tempCarry - 10;
//     } else {
//       const tempCarry = carry;
//       carry = 0;
//       return subtotal + tempCarry;
//     }
//   });
//   if (carry === 1) {
//     output.push(1);
//   }
//   return output;
// };

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
