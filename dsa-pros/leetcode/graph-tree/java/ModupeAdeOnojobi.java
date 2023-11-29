import java.util.HashSet;
import java.util.Set;


/*-------------------------------------------------------------------------
1. Find The Town Judge
-------------------------------------------------------------------------- */
class FindTownJudge {
    public int findJudge(int n, int[][] trust) {
        
      int[] trustGiven = new int[n + 1]; // Number of people a person trusts
      int[] trustReceived = new int[n + 1];  // Number of people trusting a person

      for (int[] t : trust) {
        trustGiven[t[1]]++;
        trustReceived[t[0]]++;
      }

      for (int i = 1; i < n + 1; i++) {
          if (trustGiven[i] == n - 1 && trustReceived[i] == 0) {
            return i;
          }
      }

      return -1;
    }
}



/*-------------------------------------------------------------------------
2. Find if Path Exists in Graph
-------------------------------------------------------------------------- */
class PathExists{

  public boolean validPath(int n, int[][] edges, int source, int destination) {
    Set<Integer> ans= new HashSet<>();
    ans.add(source);
    int r=0;


    while(r<ans.size() && !ans.contains(destination)) {
      r=ans.size();
      for(int i=0;i<edges.length;i++) {
          if(ans.contains(edges[i][0])) {
              ans.add(edges[i][1]);
          }
          if(ans.contains(edges[i][1])) {
              ans.add(edges[i][0]);
          }
      }
    }

      return ans.contains(destination);
  }         
}



/*-------------------------------------------------------------------------
3. Course Schedule
-------------------------------------------------------------------------- */



/*-------------------------------------------------------------------------
4. Symmetric Tree
-------------------------------------------------------------------------- */
//  * Definition for a binary tree node.
class TreeNode {
      int val;
      TreeNode left;
     TreeNode right;
      TreeNode() {}
      TreeNode(int val) { this.val = val; }
      TreeNode(int val, TreeNode left, TreeNode right) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
}

class Symmetric{
    public boolean isSymmetric(TreeNode root) {

        if (root == null) return true;
       
        return isMirror(root.left, root.right);
        
    }

    private boolean isMirror(TreeNode left, TreeNode right) {
        if (left == null || right == null) {
            if (left == right) return true;
            else return false;

        }
         
        if (left.val != right.val) return false;

        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
}

/*-------------------------------------------------------------------------
5. Sum of Root To Leaf Binary Numbers
-------------------------------------------------------------------------- */

class SumRootToLeaf {
  public int sumRootToLeaf(TreeNode root) {

      return sumRootLeaf(root, 0);
      
  }

  public int sumRootLeaf(TreeNode root, int sum) {
      if (root == null) {
          return 0;
      }

      sum = (2 * sum) + root.val;
      if (root.left == null && root.right == null) {
          return sum;
      }

      return sumRootLeaf(root.left, sum) + sumRootLeaf(root.right, sum);
  }
}


/*-------------------------------------------------------------------------
5. Average of Levels in Binary Tree
-------------------------------------------------------------------------- */



/*-------------------------------------------------------------------------
6. Binary Tree Inorder Traversal
-------------------------------------------------------------------------- */

/*-------------------------------------------------------------------------
7. Maximum Depth of Binary Tree
-------------------------------------------------------------------------- */

class MaxDepth {
    public int maxDepth(TreeNode root) {

        if (root == null) {
            return 0;
        }

        int left = maxDepth(root.left);
        int right = maxDepth(root.right);

        return Math.max(left, right) + 1;        
    }
}


/*-------------------------------------------------------------------------
8. Merge Two Binary Trees
-------------------------------------------------------------------------- */

class MergeBinaryTree {
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) {
            return null;
        } else if (root1 == null) {
            return root2;
        } else if (root2 == null) {
            return root1;
        }

        root1.val += root2.val;
        root1.left = mergeTrees(root1.left, root2.left);
        root1.right = mergeTrees(root1.right, root2.right);
        return root1;
        
    }
}