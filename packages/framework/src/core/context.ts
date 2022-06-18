import { IncomingMessage, ServerResponse } from 'http';

export default class Context {
  req: IncomingMessage;
  res: ServerResponse;
  state: {
    [key: string]: unknown;
  };

  constructor(req: IncomingMessage, res: ServerResponse) {
    this.req = req;
    this.res = res;
    this.state = {};
  }
}
