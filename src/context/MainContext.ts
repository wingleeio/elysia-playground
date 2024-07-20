import { Elysia } from "elysia";
import { GeneratorEmitter } from "@/lib/GeneratorEmitter";
import { jsx } from "@/plugins/jsx";
import { staticPlugin } from "@/plugins/static";

const events = new GeneratorEmitter();

export const MainContext = new Elysia()
    .state({ count: 0 })
    .decorate({
        events,
    })
    .use(staticPlugin("public"))
    .use(jsx());
