"""valid parentheses () [] {}"""


from sqlalchemy import false


class Solution(object):
    def isValid(self,s):
        stack=[]
        dict={"]":"[","}":"{",")":"("}
        for char in s:
            if char in dict.values():
                stack.append(char)
            elif char in dict.keys():
                if stack==[] or dict[char]!=stack.pop():
                    return False

            else:
                return False
        return stack==[]


def isValid(self,s:str)-> bool:
    if len(s)==0:
        return True
    stack=[]
    for c in s:
        if c=='('or c =='[' or c =='{':
            stack.append(c)
        else:
            if len(stack)==0:
                return False
            else:
                temp = stack.pop()
                if c ==')':
                    if temp!='(':
                        return False
                elif c==']':
                    if temp !='[':
                        return False
                elif c =='}':
                    if temp !='{':
                        return False
    return True if len(stack)==0 else False
