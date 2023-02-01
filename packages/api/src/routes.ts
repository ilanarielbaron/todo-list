import express from "express";
import { all, changeOrder, insertNew, remove } from "./controllers/ItemController";

const router = express.Router();

router.route("/").post(insertNew).get(all).delete(remove);

router.route("/changeOrder").post(changeOrder);

export default router;
