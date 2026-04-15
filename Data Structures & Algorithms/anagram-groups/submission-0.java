class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

        Map<String, List<String>> map = new HashMap<>();
        List<List<String>> finalArray = new ArrayList<>();

        // O(m)
        for(String str: strs) {

            String sortedString = sorting(str);
            
            if (map.containsKey(sortedString) == true) {
                map.get(sortedString).add(str);
            } else {
                List<String> newArr = new ArrayList<>();
                newArr.add(str);
                map.put(sortedString, newArr);
            };
        };

        for(String key: map.keySet()) {
            finalArray.add(map.get(key));
        };

        if(finalArray.size() < 1) {
            List<String> forAdding = new ArrayList<>();
            forAdding.add("");
            // String[] forAdding = new String("");
            finalArray.add(forAdding);
        };

        return finalArray;
    }

    public String sorting(String str) {
        // nlogn
        if(str.length() == 0) return "";

        char[] arr = str.toCharArray();
        Arrays.sort(arr);

        String sortedString = new String(arr);
        return sortedString;
    }
}