const twoSum = (nums, target) => {
    const prevValues = {}
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i]
        const neededValue = target - currNum
        const index2 = prevValues[neededValue]
        if (index2 !== null) {
            return [index2, i]
        } else {
            prevValues[currNum] = i
        }
    }
}