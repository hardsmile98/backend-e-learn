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

/**
 * @swagger
 * /api/v1/course/learn/${id}:
 *   get:
 *     summary: Получение списка слов для изучения
 *     responses:
 *       200:
 *         description: список слов
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  moneyForWord: 
 *                      type: number
 *                      example: 2
 *                  words:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: number
 *                              word:
 *                                  type: string
 *                              translate:
 *                                  type: string 
*/

/**
 * @swagger
 * /api/v1/course/learn:
 *   post:
 *     summary: Завершить обучение слов
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                courseId:
 *                  type: number
 *                money:
 *                  type: number
 *                wordIds:
 *                  type: array
 *                  items:
 *                     type: number
 *                  
 *     responses:
 *       200:
 *         description: добавление выученных слов
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