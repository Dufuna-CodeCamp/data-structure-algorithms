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