import { IUser } from "../components/CardPosts/CardPosts.intefaces";

export interface IUserRoute {
  key: string;
  name: string;
  params: {
    user: IUser;
  };
}