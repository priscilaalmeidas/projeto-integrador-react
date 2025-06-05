import { AxiosResponse } from "axios";
import api from "../../services/api";
import { Products } from "./types";

export async function getApiRecentProducts(): Promise<
  AxiosResponse<Products[]>
> {
  return await api.get("/products/recents");
}
export async function getApiRecommendedProducts(): Promise<
  AxiosResponse<Products[]>
> {
  return await api.get("/products/recommended");
}
