
let lowerCaseWords = (mixedArray) => {

  return new Promise(
    (resolve, reject) =>
    {

          if (mixedArray.length >= 0 && Array.isArray(mixedArray)) {

            let stringArray = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string");
            let lowerCaseStringArray = stringArray.map((x) =>   x.toLowerCase() );
            resolve(lowerCaseStringArray);
          }
          else
          {
          reject("Please enter a valid value");
          }
      }
  );
};


let mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];


lowerCaseWords(mixedArray)
  .then((value) => console.log(value)  )
  .catch((error) => console.log(error) );
