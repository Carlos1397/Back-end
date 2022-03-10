import dotenv from 'dotenv';
dotenv.config();
export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'usuariogit',
    MONGO_USER:'admin',
    MONGO_PASSWORD:'admin',
    MONGO_HOST: 'localhost',
    PORT_SERVER: process.env.PORT || 4000
}