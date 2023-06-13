module.exports =
  (...excludedKeys) =>
  (req, res, next) => {
    if (req.body)
      for (var key in req.body)
        if (excludedKeys.includes(key) == false)
          req.body[key] = req.body[key].trim();

    next();
  };