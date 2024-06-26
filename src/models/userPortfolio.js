
import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const portfolioSchema = new mongoose.Schema({
    navgithub: {
        type: {},
    },
    navlinkedin: {
        type: {},
    },
    navinsta: {
        type: {},
    },
    template: {
        type: String,
    },
    username: {
        type: String,
    },
    findUser : {
        type: String,
        unique: true,
    },
    whatyouare : {
        type: String,
    },
    summary : {
        type: String,
    },
    heroImage: {
        type: String,
    },
    resume : {
        type: String,
    },
    abouttext : {
        type: String,
    },
    aboutImage: {
        type: String,
    },
    email :{
        type: String,
    },
    address : {
        type: String,
    },
    mobile : {
        type: String,
    },
    sociallinks: {
        type: [],
    },
    technology: {
        type: [],
    },
    projects :{
        type: [],
    },
    experience: {
        type: [],
    }
});

const Data = mongoose.models.data || mongoose.model("data", portfolioSchema);
export default Data;