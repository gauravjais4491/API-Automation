const router = require("express").Router();

const {
    postUserInfo,
    getUserInfo,
    getSingleUserInfo,
    updateUserInfo,
    deleteUserInfo,
} = require("../controller/user");
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - age
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         age:
 *           type: number
 *           description: Age of the user
 *       example:
 *         name: "Rohit Sharma"
 *         email: "rohit@example.com"
 *         age: 34
 */


/**
 * @swagger
 * /postuserinfo:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: Successfully created a new user
 *       '400':
 *         description: Bad request, check your request payload
 */

router.post("/postuserinfo", postUserInfo);

/**
 * @swagger
 * /getuserinfo:
 *   get:
 *     summary: Retrieve all users
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Successfully retrieved users
 *       '404':
 *         description: No users found
 */
router.get("/getuserinfo", getUserInfo);

/**
 * @swagger
 * /getsingleuser/{userid}:
 *   get:
 *     summary: Retrieve a single user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userid
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       '200':
 *         description: Successfully retrieved the user
 *       '404':
 *         description: User not found
 */
router.get("/getsingleuser/:userid", getSingleUserInfo);
/**
 * @swagger
 * /updateUser/{userid}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userid
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: Successfully updated the user
 *       '404':
 *         description: User not found
 */
router.put("/updateUser/:userid", updateUserInfo);

/**
 * @swagger
 * /deleteuser/{userid}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userid
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       '200':
 *         description: Successfully deleted the user
 *       '404':
 *         description: User not found
 */
router.delete("/deleteuser/:userid", deleteUserInfo);

module.exports = router;