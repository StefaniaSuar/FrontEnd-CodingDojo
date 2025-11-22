require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user.routes');
const songsRoutes = require('./routes/songs.routes');
const albumsRoutes = require('./routes/albums.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/songs', songsRoutes);
app.use('/api/albums', albumsRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ ok:false, mensaje: 'Error del servidor' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(()=> {
    console.log('MongoDB conectado');
    app.listen(PORT, ()=> console.log(`Server en puerto ${PORT}`));
  })
  .catch(err => console.error(err));
