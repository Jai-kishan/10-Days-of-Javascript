function getSecondLargest(nums) {
    // Complete the function
    var n = readLine();
    n = parseInt(n);

    function list_sort(a, b) {
        return (a - b);
    }

    nums.sort(list_sort);

    var unique_list = [];
    for (var i = 0; i < nums.length; i++) {
        if (unique_list.includes(nums[i])) {
            (" ");
        } else {
            unique_list.push(nums[i]);
        }
    }
    return (unique_list[unique_list.length - 2]);
}