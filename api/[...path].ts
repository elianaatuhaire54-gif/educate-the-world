import type { Request, Response } from 'express';
import { etwReady } from '../server';

export default async function handler(req: Request, res: Response) {
  const app = await etwReady;

  if (!app) {
    res.status(500).json({ error: 'Server failed to initialize' });
    return;
  }

  app(req, res);
}
