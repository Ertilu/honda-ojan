// import type * as Party from "partykit/server";

// export type Poll = {
//   title: string;
//   options: string[];
//   votes?: number[];
// };

// export default class Server implements Party.Server {
//   constructor(readonly room: Party.Room) {}

//   poll: Poll | undefined;

//   onConnect(conn: Party.Connection, ctx: Party.ConnectionContext) {
//     // A websocket just connected!
//     console.log(
//       `Main Connected:
//   id: ${conn.id}
//   room: ${this.room.id}
//   url: ${new URL(ctx.request.url).pathname}`
//     );

//     // let's send a message to the connection
//     conn.send("hello from server");
//   }

//   async onMessage(message: string, sender: Party.Connection) {
//     console.log(`main server connection ${sender.id} sent message: ${message}`);
//     // as well as broadcast it to all the other connections in the room...
//     this.room.broadcast(
//       `${sender.id}: ${message}`,
//       // ...except for the connection it came from
//       [sender.id]
//     );
//   }
// }

import type * as Party from "partykit/server";

export default class PartyServer {
  constructor(public party: Party.Party) {}
}
