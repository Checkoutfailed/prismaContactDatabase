import Express, { json } from "express";
import ContactRoute from "./routes/contacts.route";
import SyncRoute from "./routes/sync.route";
import { configDotenv } from "dotenv";
import { errorMiddleware } from "./middleware/error.middleware";

configDotenv();

const app = Express()
app.use(json())

app.use("/api/contacts", ContactRoute)
app.use("/api/sync", SyncRoute)

app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
    console.log(`Server is runnning on port ${process.env.PORT}`)
})