import { useTnxDetails } from '@/hooks'
import { useSearchParams } from 'react-router-dom'

const TnxDetailsComponent = () => {
  const [searchParams] = useSearchParams()
  const tnxId = searchParams.get('tnxId') || ''
  const { data: tnxDetails, isLoading, isError } = useTnxDetails(tnxId)

  if (isLoading) {
    return <div>Loading transaction details...</div>
  }

  if (isError || !tnxDetails) {
    return <div>Error fetching transaction details.</div>
  }

  return (
    <div>
      <h1>Transaction Details</h1>
      <p>ID: {tnxDetails.id}</p>
      <p>Status: {tnxDetails.status}</p>
      <p>Amount: {tnxDetails.amount}</p>
    </div>
  )
}

export default TnxDetailsComponent
