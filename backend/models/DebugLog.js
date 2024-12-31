import mongoose from "mongoose"

const debugLogSchema = new mongoose.Schema({
    codeSnippet: {
        type: String,
        required: true
    },
    suggestions: {
        type: String,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },


})

export default DebugLog = mongoose.model('DebugLog',debugLogSchema)