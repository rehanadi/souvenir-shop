import type { Session, DefaultSession } from 'next-auth'

export type SessionUser  = {
  user: DefaultSession['user'] & {
    id?: string
  }
} | null

export type SubSession = (Session & SessionUser) | null

export type AuthErrorMessages = {
  [key: string]: string
}
