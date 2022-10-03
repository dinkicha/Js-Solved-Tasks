function main(input) {
    let commands = {
      InsertSpace,
      Reverse,
      ChangeAll,
    };
    let text = input.shift();
  
    while (input[0] !== "Reveal") {
      let tokens = input.shift().split(":|:");
      let name = tokens[0];
      let p1 = tokens[1];
      let p2 = tokens[2];
      let command = commands[name];
      text = command(text, p1, p2);
    }
  
    console.log(`You have a new text message: ${text}`);
    function InsertSpace(text, index) {
      let leftSide = text.slice(0, index);
      let rightSide = text.slice(index);
      let result = leftSide + " " + rightSide;
      console.log(result);
      return result;
    }
  
    function Reverse(text, substr) {
      let index = text.indexOf(substr);
  
      if (index !== -1) {
        let leftSide = text.slice(0, index);
        let rightSide = text.slice(index + substr.length);
        let result = leftSide + rightSide + substr.split("").reverse().join("");
        console.log(result);
        return result;
      } else {
        console.log("error");
        return text;
      }
    }
  
    function ChangeAll(text, substr, replacement) {
      let result = text.split(substr).join(replacement);
      console.log(result);
      return result;
    }
  }
  main([

    'heVVodar!gniV',
    
    'ChangeAll:|:V:|:l',
    
    'Reverse:|:!gnil',
    
    'InsertSpace:|:5',
    
    'Reveal'
    
    ])