/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Регистрация нового пользователя.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ответ на регистрацию.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: boolean resoonse.
 *                   example: true
*/

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Вход в систему
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ответ вход в систему.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: boolean resoonse.
 *                   example: true
*/

/**
 * @swagger
 * /api/v1/auth/logout:
 *   post:
 *     summary: Выход из системы
 *     responses:
 *       200:
 *         description: Ответ вход в систему.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: boolean resoonse.
 *                   example: true
*/