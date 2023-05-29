import java.util.HashSet;

class Solution {
    public int partitionString(String s) {

        // Initialize substrings count to 1 because as long as the string is not empty, we can expect at least one substring by default.
        int count = 1;

        // Create hashset to store unique characters
        HashSet<Character> characters = new HashSet<Character>();

        for (int i = 0; i < s.length(); i++) {
            if (characters.contains(s.charAt(i))) {
                characters.clear();
                count++;
            }

            characters.add(s.charAt(i));
        }

        return count;
        
    }
}


/**
abacaba
count = 1

i = 0
HashSet = {a}

i = 1
HashSet = {ab}

i = 2
count = 2
HashSet = {a}

i = 3
HashSet = {ac}

i = 4
count = 3
HashSet = {a}

i = 5
HashSet = {ab}

i = 6
count = 4
HashSet = {a}


 */