const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    title: String,
    code: String,
    thumbnail: String,
    uploadedBy: { type: Types.ObjectId, ref: 'users' },
    createdAt: Date
})

module.exports = model('compCollection', mySchema);
