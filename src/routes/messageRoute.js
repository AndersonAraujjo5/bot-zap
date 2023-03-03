import { Router } from 'express';

import receveMessageController from '../controllers/ReceveMessageController';

const router = new Router();

router.get('/', receveMessageController.receveMessage);

export default router;
