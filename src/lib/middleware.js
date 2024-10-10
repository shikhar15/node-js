import * as jwt from 'jsonwebtoken';
import { sendResponse } from "./genricResponse.js";
import config from './config.js';
import { User } from '../modal/user.js';

export const authMiddilware = async (req, res, next) => {

  if (req.headers) {
    const token = req?.headers?.authorization;
    const decoded = jwt.decode(token,config.SECRET_KEY);
    const user = await User.findOne({email: decoded?.Email})
    
    if(user){
      next()
    }else{
      sendResponse(res, 401, "Unauthorised");
    }
  } else {
    sendResponse(res, 400, "Bad Request");
  }
};
