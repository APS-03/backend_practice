import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './.env',
})

//require('dotenv').config({path: './env'})

connectDB()

// 1. Approach 1 to connect db 

// const app = express();

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error', (error)=> {
//             console.log("Error: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
        
//     } catch (error) {
//         console.error("Error: ", error);
//         throw err
//     }
// })
