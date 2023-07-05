#Remove element
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0  # Variable to track the number of elements not equal to val

    # Iterate over the array using two pointers
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]  # Move the element to the front of the array
                k += 1
        
        return k

#Move zeroes: Two pointer technique in Python too
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        non_zero_idx = 0  # Pointer to keep track of the position for non-zero elements

    # Iterate through the array
        for i in range(len(nums)):
            if nums[i] != 0:
            # If the current element is non-zero, move it to the non_zero_idx position
                nums[non_zero_idx] = nums[i]
                non_zero_idx += 1

    # Fill the remaining elements from non_zero_idx to the end of the array with zeros
        for i in range(non_zero_idx, len(nums)):
            nums[i] = 0

#Python(To minimize the total number of operations, 
# we can optimize the previous solution by swapping non-zero elements 
# with zero elements instead of moving them to the front of the array.)

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        non_zero_idx = 0  # Pointer to keep track of the position for non-zero elements

    # Iterate through the array
        for i in range(len(nums)):
            if nums[i] != 0:
            # Swap the current non-zero element with the element at non_zero_idx position
                nums[i], nums[non_zero_idx] = nums[non_zero_idx], nums[i]
                non_zero_idx += 1

#Median of two sorted arrays(To find the median of two sorted arrays in Python with a runtime complexity of O(log(m+n)), you can use the concept of the "Median of Two Sorted Arrays" algorithm.)
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if len(nums1) > len(nums2):
        # Swap arrays to ensure nums1 is always smaller or equal in length to nums2
            nums1, nums2 = nums2, nums1
            
        m, n = len(nums1), len(nums2)
        low, high = 0, m

        while low <= high:
            partition_nums1 = (low + high) // 2
            partition_nums2 = (m + n + 1) // 2 - partition_nums1

            max_left_nums1 = float('-inf') if partition_nums1 == 0 else nums1[partition_nums1 - 1]
            min_right_nums1 = float('inf') if partition_nums1 == m else nums1[partition_nums1]

            max_left_nums2 = float('-inf') if partition_nums2 == 0 else nums2[partition_nums2 - 1]
            min_right_nums2 = float('inf') if partition_nums2 == n else nums2[partition_nums2]
            
            if max_left_nums1 <= min_right_nums2 and max_left_nums2 <= min_right_nums1:
                if (m + n) % 2 == 0:
                    return (max(max_left_nums1, max_left_nums2) + min(min_right_nums1, min_right_nums2)) / 2
                else:
                    return max(max_left_nums1, max_left_nums2)
            elif max_left_nums1 > min_right_nums2: 
                high = partition_nums1 - 1            
            else:
                low = partition_nums1 + 1

        raise ValueError("Input arrays are not sorted!")

