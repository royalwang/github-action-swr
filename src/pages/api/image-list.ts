
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { name: 'nginx', tags: ['1.21.1', 'latest', '1.27'] },
    { name: 'fh_dji_mqtt', tags: ['1', '2'] },
    // more images
  ]);
}
