import { IHelpCard } from "@/interface/helpCard";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL

const apiClient = axios.create({baseURL})


// get all help cards
export const getAllCards = async () => {
  return (await apiClient.get<IHelpCard[]>(`${baseURL}/cards`)).data
}

// get single help card
export const getSingleCard = async (title: string) => {
  return (await apiClient.get<IHelpCard>(`${baseURL}/cards/${title}`)).data
}

// create help card
export const createCard = async (helpCard: IHelpCard) => {
  return (await apiClient.post(`${baseURL}/cards`, helpCard)).data
}

// update help card
export const updateCard = async (title: string, helpCard: IHelpCard) => {
  return (await apiClient.patch(`${baseURL}/cards/${title}`, helpCard)).data
}

// delete help card
export const deleteCard = async (title: string) => {
  return (await apiClient.delete(`${baseURL}/cards/${title}`)).data
}