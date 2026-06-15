const removeFromArray = function(arr, ...arg) {
    let result = []
    for (let i = 0; i < arr.length; i++){
        let shouldRemove = false;


        for (let j = 0; j < args.length; j++) {
            if (array[i] === args[j]) {
                shouldRemove = true;
            }
        }
        if (!shouldRemove) {
            result.push(array[i]);
        }
    }

    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
