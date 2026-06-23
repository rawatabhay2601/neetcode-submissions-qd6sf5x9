class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False;
        
        obj = {}
        
        for val in s:
            if obj.get(val):
                obj[val] += 1
            else:
                obj[val] = 1

        for val in t:
            if obj.get(val):
                obj[val] -= 1
            else:
                obj[val] = -1

        values = list(filter(lambda val: val != 0 , obj.values()))
        return False if len(values) else True