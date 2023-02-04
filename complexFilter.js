/* const arr1 = [1,2,9,4,5,6]
const arr2 = [1,3,5, 8, 10, ]
const match = arr1.filter(item => arr2.includes(item))
console.log(match); */


var array = [{ id: 1, name: "test1" }, { id: 2, name: "test2" }, { id: 3, name: "test3" }, { id: 4, name: "test4" }];

var anotherOne = [{ id: 2, name: "test2" }, { id: 4, name: "test4" }];

var filteredArray = array.filter(function (array_el) {
    return anotherOne.filter(function (anotherOne_el) {
        return anotherOne_el.id == array_el.id;
    }).length == 0
});

const matched = array.filter(item => {
    return anotherOne.filter((innerItem) => {
        return innerItem.id == item.id
    }).length == 1
})

console.log(matched);