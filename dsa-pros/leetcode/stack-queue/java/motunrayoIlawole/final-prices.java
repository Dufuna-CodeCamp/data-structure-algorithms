class Solution {
    public int[] finalPrices(int[] prices) {

        int[] result = new int[prices.length];

        for (int i = 0; i < prices.length; i++) {
            int currentPrice = prices[i];

            for (int j = i + 1; j < prices.length; j++) {
                if (prices[j] <= currentPrice) {
                    result[i] = currentPrice - prices[j];
                    break;
                }

                result[i] = currentPrice;
            }
        }
        result[prices.length - 1] = prices[prices.length - 1];

        return result;


        
    }
}