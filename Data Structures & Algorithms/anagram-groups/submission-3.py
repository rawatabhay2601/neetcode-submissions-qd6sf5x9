class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        obj = {}
        for val in strs:
            key = "".join(sorted(val))

            if obj.get(key):
                obj[key] = [*obj[key], val]
            else:
                obj[key] = [val]

        
        return [*obj.values()]
