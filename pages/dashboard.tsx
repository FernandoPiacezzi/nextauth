import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function dashboard() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      dashboard {user?.email}
    </div>
  )
}

