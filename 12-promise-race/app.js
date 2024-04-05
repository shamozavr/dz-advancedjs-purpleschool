const ArrayOfPromises = [];

async function getPromise(url) {
  const request = await fetch(url);
  return request;
}

ArrayOfPromises.push(getPromise("https://dummyjson.com/products/"))
ArrayOfPromises.push(getPromise("https://api.sampleapis.com/avatar/info"))
ArrayOfPromises.push(getPromise("https://www.boredapi.com/api/activity"))

async function race(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach(promise => {
      promise
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

race(ArrayOfPromises)
  .then(data => {
    return data.json()
  })
  .then(data => {
    console.log(data)
  })