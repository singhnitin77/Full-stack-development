export const linearSearch = function (arr,target) {
    arr.forEach(element => {
        if(element == target) {
            return true;
        }
    });
    return false;
}

//named export