import axiosClient from './axios-client'

export type UserProfile = {
  id: string
  name: string
  city: string
  email: string
}

export const userApi = {
  getProfile: (): Promise<UserProfile> => axiosClient.get('/public-profile'),
}
