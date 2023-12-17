import { UserProfile, userApi } from '@/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

type UseProfileQueryOptions = Omit<UseQueryOptions<UserProfile>, 'queryKey' | 'queryFn'>

export const useProfile = (options?: UseProfileQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: ['profile'],
    queryFn: userApi.getProfile,
  })
}
