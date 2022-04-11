"""remove duplicate from sorted array"""

class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0

            newTail=0
            for i in range(1,len(nums)):
                if(nums[i]!=nums[newnewTail]):
                    newTail+=1
                    nums[newTail]=nums[i]
            return newTail

        