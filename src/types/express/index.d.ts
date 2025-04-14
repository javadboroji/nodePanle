import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export interface IPosts {
  id: number;
  title: string;
  content: string;
  category_id: number;
  user_id: number;
  image_url: string;
  status: boolean;
  created_at ?: Date;
  updated_at ?: Date;
}
