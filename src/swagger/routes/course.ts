/**
 * @swagger
 * /api/v1/course:
 *   get:
 *     summary: Получение списка курсов
 *     responses:
 *       200:
 *         description: список курсов
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   progress:
 *                      type: object
 *                      properties:
 *                        value:
 *                          type: number
 *                        all:
 *                          type: number
*/