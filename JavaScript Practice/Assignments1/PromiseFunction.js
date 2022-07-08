// function promiseWrapper(url){
//     let output = ["No data returned", "Status code"];

//     async function PromiseHandler() {
//         let response = await fetch(url, {mode: 'no-cors'});

//         // console.log(response.status); 
//         // console.log(response.statusText); 

//         if (response.status === 200) {
//             let data = await response.text();
//             output[0] = data;
//         }
//         output[1] = response.status;
//     }

//     constPromiseHandler();

//     return output;

// }

// const promiseResponse = promiseWrapper('https://reqres.in/api/products/3');
// console.log(promiseResponse);



// function promiseWrapper(url){

    const promise = fetch(url, {mode: 'no-cors'});
    const promiser = async (promise) => {
        try {
          const data = await promise;
          return [data, null]
        } catch (err){
          return [null, error]
        }
    }
// }

// const promiser = async (promise) => {
//     try {
//       const data = await promise;
//       return [data, null]
//     } catch (err){
//       return [null, error]
//     }
// }

// console.log(promiser(fetch('https://reqres.in/api/products/3', {mode: 'no-cors'})));


const promiser = async (promise) => {
    try {
      const data = await promise;
      return [data, null]
    } catch (err){
      return [null, error]
    }
}

const temp = promiser(fetch('https://reqres.in/api/products/3', {mode: 'no-cors'}));

temp.then(data => console.log(data))












// function promiseWrapper(url){
//     let output = ["No data returned", "Status code"];

    
//     let response = fetch(url);

//     response.then((data) => {
//         output[0] = data.text();
//         output[1] = data.status;
//     }).catch(data => {
//         output[1] = data.status;
//     })

//     // console.log(response.status); 
//     // console.log(response.statusText); 

//     if (response.status >= 200 && response.status <= 299) {
//         return output;
//     }
//     else if(response.status >= 400 && response.status <= 499){
//         return output;
//     }
// }

// const promiseResponse = promiseWrapper('https://reqres.in/api/products/3');
// console.log(promiseResponse);
