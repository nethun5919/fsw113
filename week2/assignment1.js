const aryGrades = [66,72,100,88,92,74,72,94,80,78]

let sum = function (accumulator, currentValue) {
    return accumulator + currentValue
}

let sumGrades = function(array) {
    return array.reduce(sum)
}

let minGrade = aryGrades.reduce(function(a, b) {
    return Math.min(a, b)
})

let maxGrade = aryGrades.reduce(function(a, b) {
    return Math.max(a, b)
})

let mean = sumGrades(aryGrades) / aryGrades.length

let range = maxGrade - minGrade

let gradeSlice = range / 5

function applyBell(grade, index, ary) {
    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
            ary[index] = 'A'
            break
        case grade >= (mean + gradeSlice): 
            ary[index] = 'B'
            break
        case grade >= (mean):
            ary[index] = 'C'
            break
        case grade >= (mean - gradeSlice): 
            ary[index] = 'D'
            break
        default:
            ary[index] = 'F'
            break
    }
}

const bellGrades = aryGrades.forEach(applyBell)

console.log(aryGrades)