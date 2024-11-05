function removeDuplicates(arr: number[]) {
    let uniq_elem_index = 0;
    let i = 1;

    while (i < arr.length) {
        if (arr[i] === arr[uniq_elem_index]) {
            i++;
            continue;
        }

        arr.splice(uniq_elem_index + 1, i - uniq_elem_index - 1);
        uniq_elem_index++;
        i = uniq_elem_index + 1;
    }

    if (i > uniq_elem_index) {
        arr.splice(uniq_elem_index + 1, i - uniq_elem_index - 1); 
    }
}

const arr = [1, 1, 1, 2, 2, 2, 2, 3, 3, 4];
removeDuplicates(arr);
console.log(arr);