let myData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(var i = 0; i < myData.length; i++) {
    console.log(myData[i])
}

myData.map(function(value,index,array) {
    console.log(" value : " +value+ " index : " +index+ " array : " +array);
})