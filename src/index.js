const express = require("express");
const server = express();
server.use(express.json());

const MovieRoutes = require('./routes/MovieRoutes');


server.use('/movie', MovieRoutes);


server.listen(3000, () => {
    console.log("SERVIDOR ONLINE!")
});