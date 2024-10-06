import type * as Party from "partykit/server";
import { json, notFound } from "./utils/response";

export type Poll = {
  title: string;
  options: string[];
  votes?: number[];
};

export default class MessageServer implements Party.Server {
  constructor(readonly room: Party.Room) {}

  poll: Poll | undefined;

  onConnect(conn: Party.Connection, ctx: Party.ConnectionContext) {
    // A websocket just connected!
    console.log(
      `MessageServer Connected:
  id: ${conn.id}
  room: ${this.room.id}
  url: ${new URL(ctx.request.url).pathname}`
    );

    // let's send a message to the connection
    conn.send("hello from MessageServer");
  }

  async onRequest(req: Party.Request) {
    // we only allow one instance of chatRooms party
    // Clients fetch list of rooms for server rendering pages via HTTP GET
    if (req.method === "GET") return json({ test: "testdli" });

    // Chatrooms report their connections via HTTP POST
    // update room info and notify all connected clients
    if (req.method === "POST") {
      const jsonData = await req.json();
      return json({ roomList: ["ok"] });
    }

    return notFound();
  }

  async onMessage(message: string, sender: Party.Connection) {
    console.log(
      `message server connection ${sender.id} sent message: ${message}`
    );
    // as well as broadcast it to all the other connections in the room...
    this.room.broadcast(
      message,
      // ...except for the connection it came from
      [sender.id]
    );
  }
}

MessageServer satisfies Party.Worker;
