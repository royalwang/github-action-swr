import { NextApiRequest, NextApiResponse } from 'next';

interface Image {
  name: string;
  tags: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Image[]>) {
  res.status(200).json([
    { name: 'nginx', tags: ['1.21.1', 'latest', '1.27'] },
    { name: 'fh_dji_mqtt', tags: ['1', '2'] },
    // more images
  ]);
}
