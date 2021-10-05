
let resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message':'Pomise RESOLVED!'});
        }, 500);
    });
}


let rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
        {
            reject({'error': 'Promise REJECTED!!'});
        }, 500);
    });
}


resolvedPromise().then(res => console.log(res))
rejectedPromise().catch(error => console.log(error))
