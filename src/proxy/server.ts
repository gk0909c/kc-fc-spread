import * as express from 'express';
import { Request, Response } from 'express';

namespace express_web_api {
  let app = express();
  let port: number = process.env.PORT || 3000;

  app.get('/', (req: Request, resp: Response) => {
    proxyToSfdc();
    resp.send('Hello Express!!\n');
  });

  app.listen(port, () => console.log(`Express app listening on port ${port}`));

  function proxyToSfdc() {
    console.log('connect to salesforce');
  }
}
