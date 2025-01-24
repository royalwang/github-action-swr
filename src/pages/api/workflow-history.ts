
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { name: 'Workflow 1', status: 'success', startedAt: '12/24/2024, 17:42' },
    { name: 'Workflow 2', status: 'success', startedAt: '12/24/2024, 15:16' },
    // more entries
  ]);
}
