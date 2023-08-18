import type { AuthErrorMessages } from '@/lib/types'

export const BASE_URL: string = ''
export const PRODUCTS_URL: string = '/api/products'
export const REVALIDATE_TIMES: number = 10
export const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID || ''
export const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET || ''

export const authErrorMessages = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email inbox.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  SessionRequired: 'Please sign in to access this page.',
  default: 'Unable to sign in.'
} as AuthErrorMessages
