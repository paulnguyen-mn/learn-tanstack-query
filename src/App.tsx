import { useProfile } from '@/hooks'

function App() {
  const { data: profile, isLoading, error } = useProfile()

  if (isLoading) {
    return <div>Loading profile...</div>
  }

  if (error) {
    return <div>Error loading profile: {error.message}</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Profile</h1>
        {profile && (
          <div>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            {/* Render other profile data as needed */}
          </div>
        )}
      </header>
    </div>
  )
}

export default App
