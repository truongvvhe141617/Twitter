import User from "~/models/schemas/User.schema";
import { connectMongoNative } from "./database.services";

// class UsersService {
//     async register(payload: { email: string, password: string }){
//         const result = await connectMongoNative.users.insertOne(
//             new User({
//                 email,
//                 password
//             })
//         )
//     }
// }