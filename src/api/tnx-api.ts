import axiosClient from './axios-client'

export type Transaction = {
  id: string
  date: string
  amount: string
  description: string
  sender: string
  receiver: string
  status: 'processing' | 'completed' | 'failed' | 'cancelled' | 'pending'
  createdAt: number
  updatedAt: number
}

export const tnxApi = {
  getDetails: (tnxId: string): Promise<Transaction> => axiosClient.get(`/transactions/${tnxId}`),
}
