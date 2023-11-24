import mongoose from 'mongoose';
import config from './config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.path, () => {
      console.log(`Example app listening on port ${config.path}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
