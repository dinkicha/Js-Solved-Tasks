function request(object) {
    if (
      object.method === undefined ||
      (object.method !== "GET" &&
        object.method !== "POST" &&
        object.method !== "DELETE" &&
        object.method !== "CONNECT")
    ) {
      throw new Error("Invalid request header: Invalid Method");
    }
    if (
      object.uri === undefined ||
      object.uri.match(/^[a-zA-Z0-9.]+$/) === null
    ) {
      throw new Error("Invalid request header: Invalid URI");
    }
    if (
      object.version === undefined ||
      (object.version !== "HTTP/0.9" &&
        object.version !== "HTTP/1.0" &&
        object.version !== "HTTP/1.1" &&
        object.version !== "HTTP/2.0")
    ) {
      throw new Error("Invalid request header: Invalid Version");
    }
    if (
      object.message === undefined ||
      object.message.match(/^[^<>\\&'"]*$/) === null
    ) {
      throw new Error("Invalid request header: Invalid Message");
    }
  
    return object;
  }
