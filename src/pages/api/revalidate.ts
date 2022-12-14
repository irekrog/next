import type { NextApiRequest, NextApiResponse } from 'next';

// http://localhost:3000/api/revalidate?secret=jakis_tam_klucz

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== 'jakis_tam_klucz') {
        return res.status(401).json({ message: 'Invalid token' });
    }

    // if (!req.body) {
    //     return res.status(422).json({ message: 'Invalid request body' });
    // }

    try {
        await res.revalidate('/on-demand-isr');
        return res.status(200).send('Success!');
    } catch (err) {
        return res.status(500).send('Error revalidating');
    }
}
