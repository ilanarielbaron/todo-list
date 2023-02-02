import express from "express";
import {
  all,
  changeOrder,
  edit,
  insertNew,
  remove,
} from "./controllers/ItemController";

const router = express.Router();

router.route("/").post(insertNew).get(all).delete(remove).patch(edit);

router.route("/changeOrder").post(changeOrder);

export default router;
