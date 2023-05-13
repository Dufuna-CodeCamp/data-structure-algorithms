package Strings;

import java.util.Comparator;
import java.util.PriorityQueue;

class Solution {
    class KeyComparator implements Comparator<Key> {
        public int compare(Key key1, Key key2) {
            if (key1.freq < key2.freq) {
                return 1;
            } else if (key1.freq > key2.freq){
                return -1;
            }
            return 0;
        }
    }

    class Key {
        int freq;
        char ch;

        Key(int value, char c) {
            freq = value;
            ch = c;
        }
    }

    public String reorganizeString(String s) {
        int[] count = new int[26];

        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
        }

        PriorityQueue<Key> pq = new PriorityQueue<>(new KeyComparator());
        for (char c = 'a'; c <= 'z'; c++) {
            int val = c - 'a';
            if (count[val] > 0) {
                pq.add(new Key(count[val], c));
            }
        }

        String result = "";

        Key prev = new Key(-1, '#');

        while (pq.size() != 0) {
            Key k = pq.peek();
            pq.poll();

            result = result + k.ch;

            if (prev.freq > 0) {
                pq.add(prev);
            }

            k.freq--;
            prev = k;
        }

        if (s.length() != result.length()) {
            return "";
        } else {
            return result;
        }

        
    }
}