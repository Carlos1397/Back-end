import {Schema, models, model} from 'mongoose'

const userGitSchema = new Schema({
    userName :{
        type: 'string',
        required: true,
        trim: true
    },
    userEmail : {
    type: 'string',
    required: true,
    unique: true,
    trim: true
    },
    condiciones :{
        type: Boolean,
        default: false
    }
},{
    versionKey:false, // para que no aparesca el _V.0
    timestamps: true 
});
 
export default model('UserGit',userGitSchema)