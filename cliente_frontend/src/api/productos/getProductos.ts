import type { GetProductosResponse } from "../../types/producto";

const API_URL = import.meta.env.VITE_URL_API;

export default async function getProductos(): Promise<GetProductosResponse>{

    const result = await fetch(API_URL + "/productos");

    if (!result.ok) throw new Error("No se pudo traer los productos de la BD.")

    return result.json();
}