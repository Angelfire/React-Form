import app from './app';
import * as http from 'http';

const PORT = process.env.PORT || 3001;
const httpServer = http.createServer(app);

try {
  httpServer.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  });
} catch (e) {
  console.log(`Something went wrong ${e}`);
}
