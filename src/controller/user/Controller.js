import { User } from "../../modal/user.js";
import { sendResponse } from '../../lib/genricResponse.js';
import { helper } from "../../lib/helper.js";

async function me(req, res, next) {
    try {
        const users = await User.find();
        console.log('Retrieved users:', users);
        sendResponse(res, 200, users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        sendResponse(res, 500, { message: 'Error retrieving users' });
    }
}

async function createUser(req, res, next) {
    try {
        // const _id = helper.generateObjectId();
        const user = await User.create({
          ...req.body,
        //   _id,
        //   createdAt: new Date().toISOString()
        });
        sendResponse(res, 201, user);
    } catch (error) {
        console.error('Error Creating users:', error);
        sendResponse(res, 500, { message: 'Error Creating users', error });
    }
}

export { me, createUser };