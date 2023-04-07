import { IncomingMessage, ServerResponse } from "http";

export default function rerouteNoAuth(res: ServerResponse<IncomingMessage>) {
  res.writeHead(302, {
    Location: "/"
  });
  res.end();
  return { props: {} };
}
