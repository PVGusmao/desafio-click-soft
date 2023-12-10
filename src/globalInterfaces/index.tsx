import { IUser } from "../components/CardPosts/CardPosts.intefaces";
import { IPosts } from "../screens/Home/Home";

export interface IRoute {
  key: string;
  name: string;
  params: {
    user: IUser;
    post: IPosts;
  };
}
  