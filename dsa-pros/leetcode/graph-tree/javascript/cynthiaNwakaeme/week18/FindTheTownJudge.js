/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

/**********
 * 1. The judge believes no one than himself.
 * 2. Whole town i.e Everybody believes judge .


 * So at the end of the statement the constraints leads to pointing out that any person that is trusted by N-1 persons
 and the same person believes no one, then the preson is said to be a judge.

 * Intuition:-
 * A basic intuition can be concluded from question is that, if a person is believing someone else than himself
 than that person is not qualified for being a judge or if a person is trusted by others and has everyone's favour
 i.e total of N-1 favours, than this person is truly the judge.

 * Algorithm:-
 * Create an array Trusted of size N+1 to represent the total number of peoples in a town and initialize it with 0 .

 * After initialization, whenever a person trust someone else than himself, the trusted value of that person should
 be decreased since that person is not satisfying the two conditions that were mentioned in the question.

 * Also if a certain x person is trusted by others from town, than this x person value should be increased
 and those who trusted that x person there values should be decreased.

 * At last traverse through every person of town and while traversing If a person is found with N-1 trusts
 than this person should be the judge and return the index of that person .



 * Time Complexity:- O(n) where n is the total number of people living in the town
 * Space Complexity:- O(n) where n is the total number of people living in the town
 * ***********/
const FindTheTownJudge = (n, trust) => {
  if (n === 1) return 1;

  const Trusted = new Array(n + 1).fill(0);
  for (let [a, b] of trust) {
    Trusted[a] -= 1
    Trusted[b] += 1
  }

  for (let i = 1; i < Trusted.length; i++) {
    if ((n - 1) === Trusted[i]) {
      return i;
    }
  }
  return -1
}

console.log(FindTheTownJudge(3, [[1,3],[2,3]]))
// console.log(FindTheTownJudge(3, [[1, 3], [2, 3], [3, 1]]))