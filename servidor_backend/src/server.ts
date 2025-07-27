// Este archivo simplemente inicia el servidor con app.listen()

require('module-alias/register')
import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
