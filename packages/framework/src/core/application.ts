import EventEmitter from 'events';
import { IncomingMessage, ServerResponse } from 'http';
import Context from './context';

export class Application extends EventEmitter {
  createContext(req: IncomingMessage, res: ServerResponse) {
    const context = new Context(req, res);

    context.state = {};
    return context;
  }
}
