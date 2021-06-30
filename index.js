// Your code here

function createEmployeeRecord([first, last, role, n]){

    
    const rec = {firstName : first, familyName : last, title : role, payPerHour : n, timeInEvents : [], timeOutEvents : []}

    return rec
}


function createEmployeeRecords(arrayOfArrays){

const records = [arrayOfArrays[1], arrayOfArrays[2]]

records.forEach( arr => {

    const recordsObject = Object.assign({}, arr)

    recordsObject['1'] = recordsObject['firstName']

})







// records.map( x => { 
//     return {firstName : x[1]}
// })

//const withNames = createEmployeeRecord(records)

return records
    
}