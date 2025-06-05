import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

// load config
dotenv.config({
	path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env`,
});

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
	console.log("req", req);
	res.json({
		message: "App running!",
		env: process.env.NODE_ENV || "",
	});
});

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
