import Elysia from "elysia";
import { MainContext } from "@/context/MainContext";

export const counter = new Elysia({ prefix: "/counter" })
    .use(MainContext)
    .post("/add", (c) => {
        c.store.count++;
        c.events.emit("counter");
    })
    .post("/subtract", (c) => {
        c.store.count--;
        c.events.emit("counter");
    })
    .get("/stream", async function* (c) {
        for await (const _ of c.events.listen("counter")) {
            yield `event: counter\ndata: ${c.store.count}\n\n`;
        }
    });
