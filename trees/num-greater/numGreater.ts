import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  if (node === null) return 0;

  let greaterCount = (node.val > lowerBound) ? 1 : 0;

  for (let child of node.children) {
    greaterCount += numGreater(child, lowerBound);
  }

  return greaterCount;
}

export { numGreater };