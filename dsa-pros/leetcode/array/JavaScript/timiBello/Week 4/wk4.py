#Contains Duplicate

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False


#Binary Search
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            middle = (left + right) // 2
            if nums[middle] == target:
                return middle
            elif nums[middle] > target:
                right = middle - 1
            else:
                    left = middle + 1
        return -1


#Rotate Array
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = k % len(nums)  # Effective number of rotations
        nums[:] = nums[-k:] + nums[:-k]


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead. Solution to do it in-place with 0(1) extra space. 
        """
        k = k % len(nums)  # Effective number of rotations
        count = 0  # Number of elements rotated
        start = 0
        while count < len(nums):
            current = start
            prev = nums[start]
            
            while True:
                next_idx = (current + k) % len(nums)
                nums[next_idx], prev = prev, nums[next_idx]
                current = next_idx
                count += 1
                
                if start == current:
                    break
                    
            start += 1


#Longest Increasing Subsequence
#  On square time complexity using dp approach
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums:
            return 0 
        
        n = len(nums)
        dp = [1] * n  # Initialize dp array with all elements as 1
        
        for i in range(1, n):
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j] + 1)

        return max(dp)

#Finding it tough to come up with an algorithm that runs in O(n log(n)) time complexity that gives the expected output. 

