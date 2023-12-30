import { Transaction, tnxApi } from '@/api'
import { QueryKeys } from '@/constants'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

type UseTnxDetailsOptions = Omit<UseQueryOptions<Transaction>, 'queryKey' | 'queryFn'>

export const useTnxDetails = (tnxId: string, options?: UseTnxDetailsOptions) => {
  return useQuery({
    ...options,
    queryKey: [QueryKeys.TNX_DETAILS, tnxId],
    queryFn: () => tnxApi.getDetails(tnxId!),
    enabled: !!tnxId,
    refetchInterval: (query) => {
      const currentStatus = query.state?.data?.status || 'pending'
      if (['completed', 'cancelled', 'failed'].includes(currentStatus)) {
        return false
      }

      return 3000 // 3 seconds
    },
  })
}
