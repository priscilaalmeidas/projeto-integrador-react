import { AxiosResponse } from "axios";
import api from "../../services/api";
import { Products } from "./types";

export function getApiProductById(
  id: string
): Promise<AxiosResponse<Products>> {
  return api.get(`/products/${id}`);
}
