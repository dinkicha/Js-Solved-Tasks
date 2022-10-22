function extract(content) {
   const text = document.getElementById('content').textContent;

    const regex = /\((.+?)\)/gm;

    let match = regex.exec(text);

    let result = [];

    while(match !== null) {
        result.push(match[1]);
        match = regex.exec(text);
    }
    return result.join('; ')
}