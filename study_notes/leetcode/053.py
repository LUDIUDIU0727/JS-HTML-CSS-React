"""maxium subarray"""

class Solution(object):
    def maxSubArray(self, nums):

        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        
        curSum=maxSum=0

        for x in nums:
            curSum = max(0,curSum+x)
            maxSum = max(maxSum,curSum)

        return maxSum
            
        