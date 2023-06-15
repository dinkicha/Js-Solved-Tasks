const { hasUser } = require("../middlewares/guards");
const router = require("express").Router();
const gameService = require("../services/gameService");
const { parseError } = require("../utils/parser");
const { generateEditOptions } = require("../utils/viewHelpers");

function getGameProps(user, game) {
  if (user) {
    game.isUser = true;
    if (user._id == game.owner) {
      game.isAuthor = true;
    }
    if (user._id !== game.owner && !game.boughtBy.find(a => a == user._id)) {
      game.canBuy = true;
    }
  }
  return game;
}

//Промени го на изпита
router.get("/", async (req, res) => {
  let games = await gameService.getAll();
  res.render("catalog", { games });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("create");
});

router.post("/create", hasUser(), async (req, res) => {
  let gameData = {
    name: req.body.name,
    image: req.body.image,
    price: Number(req.body.price),
    description: req.body.description,
    genre: req.body.genre,
    platform: req.body.platform,
    owner: req.user._id,
  };
  try {
    if (Object.values(gameData).some((v) => !v)) {
      throw new Error("All fields are required");
    }
    await gameService.create(gameData);
    res.redirect("/games");
  } catch (err) {
    res.render("create", {
      errors: parseError(err),
      body: gameData,
    });
  }
});

router.get("/:id/details", async (req, res) => {
  let gameId = req.params.id;
  let game = await gameService.getById(gameId);

  game = getGameProps(req.user, game);

  res.render("details", { game });
});

router.get("/:id/buy", hasUser(), async (req, res) => {
  let gameId = req.params.id;
  let game = await gameService.getById(gameId);

  try {
    if (req.user._id == game.owner) {
      return res.redirect("/404");
    }
    await gameService.buy(gameId, req.user._id);
    res.redirect(`/games/${gameId}/details`);
  } catch (err) {
    game = getGameProps(req.user, game);
    res.render("details", { game, errors: parseError(err) });
  }
});

router.get('/:id/delete', hasUser(), async (req, res) => {
    let gameId = req.params.id;
    let game = await gameService.getById(gameId);

    if (req.user._id != game.owner) {
      return res.redirect(`/404`);
    }

    await gameService.delete(gameId);
    res.redirect('/games') 
});

router.get('/:id/edit', hasUser(), async (req, res) => {
    let gameId = req.params.id;
    let game = await gameService.getById(gameId);
    let gameOptions = generateEditOptions(game.platform);

    if (req.user._id != game.owner) {
        return res.redirect(`/404`);
    }

    res.render('edit', {game, gameOptions})
});


router.post('/:id/edit', hasUser(), async (req, res) => {
    let gameId = req.params.id;
    let game = await gameService.getById(gameId);
    
    if (req.user._id != game.owner) {
        return res.redirect(`/404`);
    }
    
    let gameData = {
        name: req.body.name,
        image: req.body.image,
        price: Number(req.body.price),
        description: req.body.description,
        genre: req.body.genre,
        platform: req.body.platform,
        owner: game.owner,
    };
    try {
        if (Object.values(gameData).some((v) => !v)) {
            throw new Error("All fields are required");
        }
        
        gameData.boughtBy = game.boughtBy;
        await gameService.update(gameId,gameData);
        res.redirect(`/games/${gameId}/details`);
    } catch (err) {
          let gameOptions = generateEditOptions(gameData.platform);
        res.render("edit", {
          errors: parseError(err),
          game,
          gameOptions,
        });
      }
});

router.get('/search', hasUser(), async (req, res) => {
    let games = await gameService.getAll();
    res.render('search', {games});
});


router.post('/search', hasUser(), async (req, res) => {
    let { name, platform} = req.body;
    let games = await gameService.search(name, platform);
    res.render('search', {games, body: {name}});
});
module.exports = router;
