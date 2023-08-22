import { getServerSession } from 'next-auth'
import { authOptions } from '@/config/auth'
import SignInButton from '@/components/auth/SignInButton'
import UserProfileButton from '@/components/auth/UserProfileButton'

const AuthUserButton: React.FC = async () => {
  const session = await getServerSession(authOptions)

  return (
    <>
      {session ? (
        <UserProfileButton session={session} />
      ) : (
        <SignInButton />
      )}
    </>
  )
}

export default AuthUserButton
