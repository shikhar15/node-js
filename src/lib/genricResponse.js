function sendResponse(response, statusCode, data) {
    const responseData = {
        code: statusCode,
        data
    }
    return response.status(statusCode).send(responseData)
}

export {sendResponse}