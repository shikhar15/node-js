import { sendResponse } from "./genricResponse.js";

export const authMiddilware = (req, res, next) => {
  console.log("---------AUTH MIDDLEWARE--------------");
  const error = false;
  if (error) {
    sendResponse(res, 401, "Unauthorised");
  } else {
    next();
  }
};
