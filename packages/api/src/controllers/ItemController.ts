import { Request, Response } from "express";
import { Item } from "../entities/Item.entity";
import { AppDataSource } from "../utils/data-source";

const itemRepository = AppDataSource.getRepository(Item);

export async function all() {
  return itemRepository.find();
}

export async function one(request: Request) {
  const id = parseInt(request.params.id);

  const item = await itemRepository.findOne({
    where: { id }
  });

  if (!item) {
    return "No item found";
  }
  return item;
}

export async function save(request: Request, res: Response) {
  const { description, order, checked } = request.body;

  if (order === undefined) return;

  const newItem = await itemRepository.insert({ description, order, checked: checked ?? false });

  if (newItem) res.status(200).json({
    status: 'success',
    data: {
      newItem,
    },
  });
}

export async function remove(request: Request) {
  const id = parseInt(request.params.id);

  const itemToRemove = await itemRepository.findOneBy({ id });

  if (!itemToRemove) {
    return "this item not exist";
  }

  await itemRepository.remove(itemToRemove);

  return "item has been removed";
}
