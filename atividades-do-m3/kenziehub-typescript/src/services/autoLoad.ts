import api from "./api";
import { IUserData } from "./userLogin";

export async function autoLoad(): Promise<IUserData> {
  const token = localStorage.getItem("@kenzie-hub:token");
  const { data } = await api.get<IUserData>("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}