import { NavLink, Outlet } from 'react-router-dom'

function App() {
  const urlList = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: 'profile',
      label: 'Profile',
    },
  ]

  return (
    <div className="App">
      {/* Simple Nav */}
      <ul>
        {urlList.map(({ path, label }) => (
          <li key={path} style={{ margin: '10px 0' }}>
            <NavLink
              to={path}
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'goldenrod' : 'black',
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  )
}

export default App
