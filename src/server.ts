import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import path from "path";
import router from "./routes/";

const app = express();
const engine: string = "ejs";

dotenv.config();
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", engine);
app.set("views", path.join(__dirname, "views"));

app.use('/', router);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on link: http://localhost:${process.env.PORT}`)
})