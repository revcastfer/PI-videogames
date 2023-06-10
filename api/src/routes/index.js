const { Router } = require('express');
const videoGamesRouter = require("./videoGamesRouter.js")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames",videoGamesRouter);
router.use("/genres",videoGamesRouter);


module.exports = router;
