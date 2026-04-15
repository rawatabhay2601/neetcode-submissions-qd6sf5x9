class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        
        let maxProfit = 0;
        let minValue = Infinity;

        for(let price of prices) {

            if(price < minValue) {
                minValue = price;
            } else {
                
                if((price - minValue) > maxProfit ) maxProfit = price - minValue;
            }
        }

        return maxProfit;
    }
}
