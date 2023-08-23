import { getServerSession } from 'next-auth'
import { authOptions } from '@/config/auth'
import SignInButton from '@/components/auth/SignInButton'
import UserMenus from '@/components/auth/UserMenus'

const AuthUserButton: React.FC = async () => {
  const session = await getServerSession(authOptions)

  return (
    <>
      {session ? (
        <UserMenus session={session} />
      ) : (
        <SignInButton />
      )}
    </>
  )
}

export default AuthUserButton
