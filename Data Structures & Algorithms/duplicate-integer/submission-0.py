class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        remove_duplicate = set(nums)
        if (len(nums) == len(remove_duplicate)):
            return False;
        else: 
            return True;