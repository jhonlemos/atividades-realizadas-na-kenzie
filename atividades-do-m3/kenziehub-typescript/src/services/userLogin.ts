import { ITech, IUserLogin } from "../contexts/AuthContext";
import api from "./api";

export interface IUserData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[] | [];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: null;
}

interface ILoginUser {
  user: IUserData;
  token: string;
}

export async function userLogin(userData: IUserLogin): Promise<ILoginUser> {
  const { data } = await api.post<ILoginUser>("/sessions", userData);

  return data;

}
