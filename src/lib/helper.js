import * as mongoose from 'mongoose'

const helper = {
    generateObjectId : () => {
        return new mongoose.Types.ObjectId();
    }
}

export { helper };