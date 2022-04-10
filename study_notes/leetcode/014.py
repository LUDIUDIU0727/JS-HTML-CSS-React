"""longest prefix"""

class solution:
    def longestCommonPrefix(self,strs):
        if not strs:
            return ""
        shortest = min(strs,key=len)
        """find the shortest str in strs"""  

        for i,ch in enumerate(shortest):
            """the returned value will be two: postion and value"""
            for other in strs:
                if other[i] != ch:
                    return shortest[:i]
        return shortest

        
        
        
       