import { faker } from '@faker-js/faker';

export const generarCancion = () => ({
  id: faker.string.uuid(),
  titulo: faker.music.songName(),
  artista: faker.person.fullName(),
  album: faker.music.album(),
  duracion: `${faker.number.int({ min: 120, max: 420 })}s`,
  genero: faker.music.genre(),
  fechaLanzamiento: faker.date.past().toISOString().split("T")[0]
});

export const generarPlaylist = () => {
  const totalCanciones = faker.number.int({ min: 3, max: 10 });
  const canciones = Array.from({ length: totalCanciones }, generarCancion);

  return {
    idPlaylist: faker.string.uuid(),
    nombre: faker.word.words(3),
    descripcion: faker.lorem.sentence(),
    canciones,
    creador: faker.person.fullName(),
    fechaCreacion: faker.date.recent().toISOString().split("T")[0]
  };
};
