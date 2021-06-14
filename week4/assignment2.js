
function chkLang(...test){
// console.log(test.length)
 test.some((testItem)=>{
// console.log(testItem)

if(testItem === 'javascript'){
  var testItem = document.getElementById('TestResult')
  testItem.textContent = "Congratulations! You know JavaScript. You can proceed with the rest of the application process."
 return true
//  return test.length = -1
}
else {
   var testItem = document.getElementById('TestResult')
   testItem.textContent =  "Sorry, if you don't know JavaScript, you cannot proceed with the rest of the application process"
   
}
// else if(testItem !== 'javascript'){
// console.log('testItem')
// }
 })

}