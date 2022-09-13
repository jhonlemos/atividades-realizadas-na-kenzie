import { INewTech } from "../contexts/AuthContext";
import api from "./api";

export interface INewTechPostId {
  id: string;
}

interface INewTechPost {
  id: string;
  title: string;
  status: string;
  user: INewTechPostId;
  created_at: string;
  updated_at: string;
}

export async function saveTech(newTech: INewTech): Promise<INewTechPost> {
  const token = localStorage.getItem("@kenzie-hub:token");
  const { data } = await api.post<INewTechPost>("/users/techs/", newTech, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
