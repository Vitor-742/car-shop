import { Request, Response, NextFunction } from 'express';

export const validateBody = (
  req: Request,
  res: Response, 
  next: NextFunction,
) => {
  const { model, year, color, buyValue } = req.body;
  if (!model || !year || !color || !buyValue) return res.status(400).end();
  next();
};

export const validateQty = (
  req: Request,
  res: Response, 
  next: NextFunction,
) => {
  const { doorsQty, seatsQty } = req.body;
  if (!doorsQty || !seatsQty) return res.status(400).end();
  if (doorsQty < 2 || seatsQty < 2) return res.status(400).end();
  next();
};

export const validateTypes = (
  req: Request,
  res: Response, 
  next: NextFunction,
) => {
  const { model, year, color, buyValue } = req.body;
  if (typeof model !== 'string') return res.status(400).end();
  if (typeof year !== 'number') return res.status(400).end();
  if (typeof color !== 'string') return res.status(400).end();
  if (typeof buyValue !== 'number') return res.status(400).end();
  next();
};

export const validateTypes2 = (
  req: Request,
  res: Response, 
  next: NextFunction,
) => {
  const { doorsQty, seatsQty } = req.body;
  if (typeof doorsQty !== 'number') return res.status(400).end();
  if (typeof seatsQty !== 'number') return res.status(400).end();
  next();
};