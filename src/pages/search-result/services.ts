import { AxiosResponse } from "axios";
import api from "../../services/api";
import { Products } from "./types";

export function getApiProductsByName(
  nameProducts: string
): Promise<AxiosResponse<Products[]>> {
  return api.get(`/products?name=${nameProducts}`);
}
