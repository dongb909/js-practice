function transformEmployyeData(employeeData){
    var newArrayOfDict = []
    for (var i = 0; i < employeeData.length; i++){
        var dict = {}
        for (var j = 0; j< employeeData[i].length; j++){
            dict[employeeData[i][j][0]] = employeeData[i][j][1]
        }
        newArrayOfDict.push(dict)
    }
    return newArrayOfDict
}





testing = [[['first', 'Joe'], ['last', 'Blow'], ['age', 20],['role', 'accountant']], [['first', 'Mary'], ['last','Shin'], ['age',21], ['role', 'professor']]]
console.log(transformEmployyeData(testing))