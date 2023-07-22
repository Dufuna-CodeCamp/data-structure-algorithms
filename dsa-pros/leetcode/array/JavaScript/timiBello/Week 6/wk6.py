#Single Number(use the XOR (exclusive OR) operation. 
# The XOR of two equal numbers is 0, and the XOR of a number with 0 is the number itself. By XORing all the elements in the array, the duplicate elements will cancel out, and the remaining element will be the single one)

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for num in nums:
            result ^= num
        return result


#Majority Element II
class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        count = {}
        result = []

    # Count occurrences of each element
        for num in nums:
            count[num] = count.get(num, 0) + 1

    # Check if element occurs more than n/3 times
        threshold = len(nums) // 3
        for num, freq in count.items():
            if freq > threshold:
                result.append(num)

        return result


#Two Sum(two pointer approach) 
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_indices = {}
        
        
        for i, num in enumerate(nums):
            complement = target - num
            
            if complement in num_indices:
                return [num_indices[complement], i]
            
            num_indices[num] = i
    
    # No solution found
        return []


#Container With Most Water(two pointer approach) 
class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        left = 0
        right = len(height) - 1
        max_area = 0
        
        while left < right:
            current_area = min(height[left], height[right]) * (right - left)
            max_area = max(max_area, current_area)
            
            
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        
        return max_area