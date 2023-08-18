import GoogleProvider from 'next-auth/providers/google'
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from './constants'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/signin'
  }
}
