// Promise chaining 
// Implement a function that makes multiple asynchronous requests in sequence, chaining promises together

// function makeSequentialRequests(urls){

//     let chain = Promise.resolve()
//     urls.forEach(url => {
//         chain = chain.then(()=>{
//             return fetch(url)
//             .then(response =>{
//                 if(!response.ok){
//                     throw new Error(`Failed to fetch ${url}`)
//                 }
//                 return response
//             }).catch(error=>{
//                 console.error(`Error fetching ${url} : ${error}`)
//                 throw error
//             })
//         })
//     })
//     return chain
// }


// const urls = ['https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise',
// 'https://www.w3schools.com/sql/sql_orderby.asp',
// 'https://javascript.info/map-set'
// ]



// makeSequentialRequests(urls)
// .then(response =>{
//     console.log(response)
// })
// .catch(error => {
//     console.log(error)
// })










// Simple example of async/await


// async function fetchData(url){
//     try{
//         let response = await fetch(url)
//         let data = await response.json()
//         console.log(data)
//     } catch (error){
//         console.error('Error: ', error)
//     }
// }


// fetchData('https://www.iana.org/help/example-domains')