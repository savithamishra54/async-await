console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket');
    },3000)
    });

    const getPopcorn = promiseWifeBringingTicks.then((t) => {  
        console.log('husband:we should go in');
        console.log('wife:no i am hungry');
        return new promise((resolve,reject) => resolve(`${t} popcorn`))
    });
    const getButter = getPopcorn.then((t) => {   
     
        console.log('husband:we should go in');
        console.log('wife:no i am hungry');
        return new promise((resolve,reject) => resolve(`${t} popcorn`))
    });
    getPopcorn.then((t) =>console.log(t));


console.log('person4: shows ticket');
console.log('person5: shows ticket');
