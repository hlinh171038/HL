//BigO(Big Order of magnitude) --> cách cải thiện thuật toán 
    //time(thời gian lâu qua)
    //complexity
// fib 0(2^n)--< cấp số nhân
// function fib(n){
//     if(n<=1){
//         return n;
//     }
//     return fib(n-1)+fib(n-2);
// }
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    // Your code here
    for(var i=0;i<nums.length;i++){
      if(target == nums[i] + nums[i+1]){
        return [i,i+1];
      }
    }
}

const nums = [2, 7, 11, 15];
const target = 9;

twoSum(nums, target);