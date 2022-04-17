var nums = [2, 7, 11, 15]
var target = 9

var twoSum = function (nums, target) {
    for (i = 0; i < nums.length - 1; i++) {
        hold = target - nums[i]
        if (nums.includes(hold) && i != nums.indexOf(hold)) {
            return [i, nums.indexOf(hold)]
        }
    }

};

console.log(twoSum(nums, target))

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

//伪代码  Pseudocode
// result = []
// map = HashTable()
// for i in [0, len(nums)]:
//     map.add(nums[i], i)
// for j in [0, len(nums)]:
//     diff = target - nums[j]
//     if map.containskey(diff) and map.get(diff) != j:
//         return result[0] = j
//                result[i] = map.get(diff)
// return result


