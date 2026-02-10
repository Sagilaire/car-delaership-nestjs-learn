import { v4 as uuid } from 'uuid';

import { Brand } from 'src/brands/entities/brand.entity';

export const BRANS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Tesla',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Mercedes-Benz',
        createdAt: new Date().getTime(),
    },
];
