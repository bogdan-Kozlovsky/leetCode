/*
121. Best Time to Buy and Sell Stock

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
 */

const maxProfit = prices => {
    if (prices == null || prices.length <= 1) return 0;
    let minBuy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        minBuy = Math.min(minBuy, prices[i]);
        profit = Math.max(profit, prices[i] - minBuy);
    }
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
