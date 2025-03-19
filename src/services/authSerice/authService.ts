import { Model } from "sequelize";
import { ModelStatic } from "sequelize";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export interface Iuser{
     id: number;
     name: string;
     email: string;
     password: string;
     role: "admin" | "user" | "editor";
     status: boolean;
}
class AuthService<T extends Model> {
    private model: ModelStatic<T>;

    constructor(model: ModelStatic<T>) {
        this.model = model;
    }

    async register(data: Partial<T["_attributes"]>): Promise<{user: T | null, error: any}> {
        if(!data) return {user: null, error: "Data is required"};
        //check if user already exists
        const existsUser = await this.model.findOne({ where: { email: data.email } });
        if(existsUser) return {user: null, error: "User already exists"};

        const newUser = {
            ...data,
            createdAt: new Date(),
            status: true,
            role:2
        }
        const user = await this.model.create(newUser as any);
        return {user, error: null};
    }
    async login(data:Partial<T["_attributes"]>): Promise<{user: T | null, error: any}> {
        if(!data) return {user: null, error: "Data is required"};
        const user = await this.model.findOne({ where: { email: data.email } });
        if(!user) return {user: null, error: "User not found"};
      
        const isMatch = await bcrypt.compare(data.password as string, (user as unknown as Iuser).password as string); 
        if(!isMatch) return {user: null, error: "Invalid password"};
        //create token
        //jwt.sign(payload, secretOrPrivateKey, options)
        const token = jwt.sign({id:(user as unknown as Iuser).id, role:(user as unknown as Iuser).role}, process.env.JWT_SECRET as string, {expiresIn:"1h"});
        const userData = user.toJSON();
    
        
        return {user: {...userData, token} as unknown as T, error: null};
    }
}   

export default AuthService;
