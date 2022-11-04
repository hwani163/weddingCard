const reducePromises = (array, callback) => ( // [A]
    array.reduce((prevPromise, currElem, index) => ( // [B]
      prevPromise.then(async prevRes => {
        const currRes = await callback(currElem, index); // [C]
        return [...prevRes, currRes];
      })
    ), Promise.resolve([]))
  );
  
  export default reducePromises;