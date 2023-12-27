import express, { Express } from "express";

const app: Express = express();
const port: number = 3000;

app.use("/", (_, res) => {
    res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening for requests on http://localhost:${port}/`);
});
