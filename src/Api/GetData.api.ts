import axios from "axios";
import { Stack } from "../types/Main.type";
import { ApiURL } from "./ApiURL";

export async function GetData():Promise<Stack[]>{
    const data : Stack[] = await axios.get(`${ApiURL}`)
    return data
}