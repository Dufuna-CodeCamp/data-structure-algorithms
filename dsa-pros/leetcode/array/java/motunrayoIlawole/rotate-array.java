class Solution {
    public void rotate(int[] nums, int k) {

    if (k == 0) {
        return;
    }
    int n = nums.length;
 
    // rotate the array to the right by one position
    int temp = nums[n-1];
    for (int i = n-1; i > 0; i--) {
        nums[i] = nums[i-1];
    }
    nums[0] = temp;
 
    // recursively rotate the remaining elements k-1 times
    rotate(nums, k-1);
        
    }
}

class Solution2 {
    public static void reverse(int nums[], int start, int end){
        
        while(start < end){
            
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            
            start++;
            end--;
        }
    }

    public void rotate(int[] nums, int k) {
        int n = nums.length;

        k = k % n;

        reverse(nums, 0, n - 1);

        reverse(nums, 0, k - 1);

        reverse(nums, k, n - 1);
        
    }
}