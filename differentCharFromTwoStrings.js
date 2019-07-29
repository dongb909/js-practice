var findTheDifference = function(s, t) {
    var S = s.split('').sort()
    var T = t.split('').sort()
    for (i = 0; i<T.length; i++){
        if (S[i] !==T[i]){
            return T[i]
        }
    }
};

function buildMapFromSet(string) {
    var newMap = new Map()
    for (var element of string.split('')) {
        if (newMap.has(element)) {
            newMap.set(element, newMap.get(element) + 1)
        } else {
            newMap.set(element, 1)
        }
    }
    return newMap
}

function diff(s, t) {
    var biggerMap
    var smallerMap
    if (s.length < t.lenght) {
        biggerMap = buildMapFromSet(t)
        smallerMap = buildMapFromSet(s)
    } else {
        biggerMap = buildMapFromSet(s)
        smallerMap = buildMapFromSet(t)
    }
    for (var mapEntry of biggerMap) {
        var character = mapEntry[0]
        var count = mapEntry[1]
        if (biggerMap.get(character) === 0) {
            return character
        } else {
            biggerMap.set(character, biggerMap.get(character) - 1)
        }
    }
    return 'no new entries'
}

// var findTheDifference = function(s, t) {
//     var S = s.split('').sort()
//     var T = t.split('').sort()
//     for (i = 0; i<T.length; i++){           //DON'T USE THIS INCLUDES METHOD BC THE CHARACTERS CAN BD S = a, t= aa 
//         if (!S.includes(T[i])){
//             return T[i]
//         }
//     }
// };

console.log(findTheDifference("acb", "bapc"))