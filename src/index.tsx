import Elysia from "elysia";
import { IndexPage } from "@/pages/IndexPage";
import { MainContext } from "@/context/MainContext";
import { counter } from "@/controllers/counter";

new Elysia()
    .use(MainContext)
    .get("/", (c) => <IndexPage count={c.store.count} />)
    .use(counter)
    .listen(4001);
