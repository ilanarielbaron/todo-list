import { Request, Response } from "express";
import { Between, MoreThanOrEqual } from "typeorm";
import { Item } from "../entities/Item.entity";
import { AppDataSource } from "../utils/data-source";

const itemRepository = AppDataSource.getRepository(Item);

export async function all(req: Request, res: Response) {
  try {
    const allItems = await itemRepository.find();
    return res.status(200).json({
      status: "success",
      data: {
        allItems,
      },
    });
  } catch (error: unknown) {
    return res.status(409).json({
      status: "fail",
      message: "Error when getting the list",
    });
  }
}

export async function insertNew(req: Request, res: Response) {
  const { description, checked } = req.body;

  if (description === undefined)
    return res.status(401).json({
      status: "fail",
      message: "Description is needed",
    });

  try {
    const maxOrderItem = await itemRepository.find({
      take: 1,
      order: { order: "DESC" },
    });

    const maxOrder = maxOrderItem?.length > 0 ? maxOrderItem[0].order : 0;
    const newItemId = await itemRepository.insert({
      description,
      order: maxOrder + 1,
      checked: checked ?? false,
    });

    const newItem = await itemRepository.findOneBy({
      id: newItemId.identifiers[0].id,
    });

    if (newItem)
      return res.status(200).json({
        status: "success",
        data: {
          newItem,
        },
      });
  } catch (error: unknown) {
    return res.status(409).json({
      status: "fail",
      message: "Error when creating new item",
    });
  }
}

export async function changeOrder(req: Request, res: Response) {
  const { id, order } = req.body;

  if (id === undefined || order === undefined)
    return res.status(401).json({
      status: "fail",
      message: "Id & order parameters needed",
    });

  try {
    const itemToMove = await itemRepository.findOneBy({ id });
    if (!itemToMove)
      return res.status(401).json({
        status: "fail",
        message: "Item not found",
      });

    const initialOrder = order < itemToMove.order ? order : itemToMove.order;
    const lastOrder = initialOrder === order ? itemToMove.order : order;

    const itemsToReorder = await itemRepository.findBy({
      order: Between(initialOrder, lastOrder),
    });

    const itemsMapped = itemsToReorder
      .filter((i) => i.id !== itemToMove.id)
      .map((item) => ({
        ...item,
        order: initialOrder === order ? item.order + 1 : item.order - 1,
      }));

    const items = await itemRepository.save([
      ...itemsMapped,
      { ...itemToMove, order },
    ]);

    return res.status(200).json({
      status: "success",
      data: {
        items,
      },
    });
  } catch (error: unknown) {
    return res.status(409).json({
      status: "fail",
      message: "Error when changing order item",
    });
  }
}

export async function edit(req: Request, res: Response) {
  const { id, checked, description } = req.body;

  if (id === undefined)
    return res.status(401).json({
      status: "fail",
      message: "Id is needed",
    });

  try {
    const item = await itemRepository.findOneBy({ id });
    if (!item)
      return res.status(401).json({
        status: "fail",
        message: "Item not found",
      });

    const itemEdited = await itemRepository.save({
      ...item,
      checked,
      description,
    });

    return res.status(200).json({
      status: "success",
      data: {
        item: itemEdited,
      },
    });
  } catch (error: unknown) {
    return res.status(409).json({
      status: "fail",
      message: "Error when editing item",
    });
  }
}

export async function remove(req: Request, res: Response) {
  const id = req.body.id;

  if (!id)
    return res.status(401).json({
      status: "fail",
      message: "Id is required",
    });

  const itemToRemove = await itemRepository.findOneBy({ id });

  if (!itemToRemove) {
    return res.status(401).json({
      status: "fail",
      message: "Item doesn't exist",
    });
  }

  try {
    await itemRepository.remove(itemToRemove);

    const orderRemoved = itemToRemove.order;
    const itemsToReorder = await itemRepository.findBy({
      order: MoreThanOrEqual(orderRemoved + 1),
    });
    const itemsMapped = itemsToReorder.map((item) => ({
      ...item,
      order: item.order - 1,
    }));

    itemRepository.save(itemsMapped);

    return res.status(200).json({
      status: "success",
      data: {
        items: itemsMapped,
      },
    });
  } catch (error: unknown) {
    return res.status(409).json({
      status: "fail",
      message: "Error when removing an item",
    });
  }
}
