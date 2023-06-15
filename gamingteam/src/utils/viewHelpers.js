exports.generateEditOptions = function (selectedValue) {
    let gameOptions = [
      { value: "", title: "-------" },
      { value: "PC", title: "PC" },
      { value: "Nintendo", title: "Nintendo" },
      { value: "PS4", title: "PS4" },
      { value: "PS5", title: "PS5" },
      { value: "XBOX", title: "XBOX" },
    ];
  
    const options = gameOptions.map((c) => ({
      title: c.title,
      value: c.value,
      selected: c.value === selectedValue,
    }));
  
    return options;
  };
  