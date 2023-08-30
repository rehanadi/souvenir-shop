import { getServerSession, type Session } from "next-auth"
import { authOptions } from "@/config/auth"

export const getSubSession = (session: Session, userId?: string) => {
  return { 
    ...session, 
    user: { 
      ...session.user, 
      id: userId ? userId : String(JSON.parse(JSON.stringify(session.user))['id']).replace('undefined', '')
    }
  }
}

export const getServerSessionUser = async () => {
  const session = await getServerSession(authOptions)
  const subSession = session ? getSubSession(session) : session
  return subSession?.user
}
