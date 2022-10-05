function makeADictonary(arrJson) {
      let dict = {};
      for (const element of arrJson) {
        let obj = JSON.parse(element);
        dict = Object.assign(dict, obj);
      }
      let iterable = Object.entries(dict);
      iterable.sort()
      for (const [name, value] of iterable) {
        console.log(`Term: ${name} => Definition: ${value}`);
      }
    }
makeADictonary([
      '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
      '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
      '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
      '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
      '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
