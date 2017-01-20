import * as express from 'express';
import { Request, Response } from 'express';
import * as request from 'request';

namespace express_web_api {
  let app = express();
  let port: number = process.env.PORT || 3000;

  app.get('/', (req: Request, resp: Response) => {
    proxyToSfdc();
    resp.send('{"msg": "Hello Express!!"}\n');
  });

  app.listen(port, () => console.log(`Express app listening on port ${port}`));

  function proxyToSfdc() {
    console.log('connect to salesforce');

    // let params = {
    //   url: 'https://login.salesforce.com/services/oauth2/token',
    //   method: 'POST',
    //   json: true,
    //   form: {
    //     grant_type: 'password',
    //     client_id: 'xxxxxxxxxxxxxxxxxxx',
    //     client_secret: 'nnnnnnnnnnnnnnnnnnnnn',
    //     username: 'xxx@xxx.xxx.com',
    //     password: 'xxxxxxxxxx'
    //   }
    // };

    let acc_token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    let params = {
      url: 'https://instance.salesforce.com/services/data/v38.0/sobjects',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + acc_token
      }
    };

    request(params, (err, res, body) => {
      console.log(Object.keys(JSON.parse(body)));
    });
  }
}
