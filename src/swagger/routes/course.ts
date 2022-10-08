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

/**
 * @swagger
 * /api/v1/course/addWord:
 *   post:
 *     summary: Добавление слова в курс
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: number
 *               word:
 *                 type: string
 *               translate:
 *                 type: string
 *     responses:
 *       200:
 *         description: добавление слова.
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
 * /api/v1/course/addCourse:
 *   post:
 *     summary: Добавление курса
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: добавление курса.
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
