// function v1Larger(v1, v2) {
//   const v1Split = v1.split('.').map(num => Number(num))
//   const v2Split = v2.split('.').map(num => Number(num))
//   while(v1Split.length !== 0 && v2Split.length) {
//     const v1Num = v1Split.shift()
//     const v2Num = v2Split.shift()
//     if (v1Num > v2Num) {
//       return true
//     } else if (v1Num < v2Num) {
//       return false
//     }
//   }
//   if (v1Split.length === 0 && v2Split.length === 0) { // implies same numbers
//     return false
//   } else if (v1Split.length > 0 && v2Split.length === 0) {
//     return true
//   } else (v1Split.length === 0 && v2Split.length > 0) {
//     return false
// //   }

// }

function v1LargerLoop(v1, v2) {
  const v1Split = v1.split('.').map(num => Number(num))
  const v2Split = v2.split('.').map(num => Number(num))
  const longerArrayLength = Math.max(v1Split.length, v2Split.length)
  for (let i = 0; i < longerArrayLength; i++) {
    if (v1Split[i] === undefined && v2Split[i] !== undefined) {
      return false
    } else if (v1Split[i] !== undefined && v2Split[i] === undefined) {
      return true
    }
    if (v1Split[i] > v2Split[i]) {
      return true
    } else if (v1Split[i] < v2Split[i]) {
      return false
    }
  }
  return false
}