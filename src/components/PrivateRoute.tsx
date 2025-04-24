// components/PrivateRoute.tsx
import { Navigate } from "react-router-dom"
import React from "react"

interface Props {
  children: React.ReactNode
}

export function PrivateRouter({ children }: Props): React.ReactElement {
  const token = localStorage.getItem("token")

  if (!token) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
