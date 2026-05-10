class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
       
        count = Counter(nums)
        result = [num for num, freq in count.most_common(k)]
        return result