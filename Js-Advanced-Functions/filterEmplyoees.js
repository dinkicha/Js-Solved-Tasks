function filterPeople(data, criteria) {
  //parsing the input from JSON
  data = JSON.parse(data);
  //splitting by '-'
  criteria = criteria.split("-");
  //making a empty array so we can put everyth in
  let result = [];

  data.map((e) => {
    if (e[criteria[0]] === criteria[1]) {
      result.push(e);
    }
  });
  //starting from -1 becauuse we need the first zeroth element
  let counter = -1;
  //just printing
  console.log(
    result
      .map((e) => {
        counter++;
        return `${counter}. ${e.first_name} ${e.last_name} - ${e.email}`;
      })
      .join("\n")
  );
}

filterPeople(
  `[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,

  "gender-Female"
);
