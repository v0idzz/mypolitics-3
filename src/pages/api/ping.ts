import { IncomingMessage, ServerResponse } from "http";

const handler = (req: IncomingMessage, res: ServerResponse): void => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("pong");
};

export default handler;
