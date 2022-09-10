/**
 * @swagger
 * /api/v1/profle/me:
 *   post:
 *     summary: Проверка авторизации
 *     responses:
 *       200:
 *         description: проверка авторизации.
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