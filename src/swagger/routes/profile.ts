/**
 * @swagger
 * /api/v1/profle/me:
 *   get:
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

/**
 * @swagger
 * /api/v1/profle/info:
 *   get:
 *     summary: Получении информации о профиле
 *     responses:
 *       200:
 *         description: информация о профиле.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  name:
 *                      type: string
 *                  balance:
 *                      type: number
 *                  words:
 *                      type: number
 *                  isFirstEntry:
 *                      type: boolean
 *                      example: false
 *                  level:
 *                      type: object
 *                      properties:
 *                          value:
 *                              type: number
 *                          count:
 *                              type: number
 *                          all:
 *                              type: number
 *                  visit:
 *                      type: object
 *                      properties:
 *                          Mo:
 *                              type: boolean
 *                          Th:
 *                              type: boolean
 *                          We:
 *                              type: boolean
 *                          Fr:
 *                              type: boolean
 *                          Sa:
 *                              type: boolean
 *                          Su:
 *                              type: boolean
 *                          Tu:
 *                              type: boolean
*/

/**
 * @swagger
 * /api/v1/profle/accrue:
 *   post:
 *     summary: Начисление бонуса каждый день
 *     responses:
 *       200:
 *         description: начисления бонуса.
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