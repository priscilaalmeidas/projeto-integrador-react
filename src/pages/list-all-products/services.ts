import { AxiosResponse } from "axios";
import api from "../../services/api";
import { Products } from "./types";

export async function getApiAllProducts(): Promise<AxiosResponse<Products[]>> {
  return await api.get("/products");
}
export async function getApiAllProductsOrdered(
  typeOrder: "descending" | "ascending"
): Promise<AxiosResponse<Products[]>> {
  return await api.get(`/products?order=${typeOrder}`);
}
