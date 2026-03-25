import type { NextApiRequest, NextApiResponse } from 'next';

// URL de la API externa (ajustar según ambiente real)
const EXTERNAL_API_URL = process.env.EXTERNAL_API_URL || 'https://api.externa.com/tecno-motos';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Api Mock
}