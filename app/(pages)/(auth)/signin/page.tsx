import Alert from "@/components/ui/Alert"
import EmailSignInForm from "@/components/auth/EmailSignInForm"
import GoogleSignInButton from "@/components/auth/GoogleSignInButton"
import FacebookSignInButton from "@/components/auth/FacebookSignInButton"
import { authErrorMessages } from "@/config/auth"

type SignInPageProps = React.FC<{ searchParams: { callbackUrl?: string, error?: string } }>

const SignInPage: SignInPageProps = ({ searchParams }) => {
  const { callbackUrl = '/', error } = searchParams
  const authError = error ? authErrorMessages[error] || authErrorMessages.default : null

  return (
    <div className='card-body p-5'>
      <h4 className='card-title pb-5 text-center'>Sign In to Your Account</h4>
      {authError && (
        <div className='card-text pb-4'>
          <Alert text={authError} />
        </div>
      )}
      <div className='card-text pb-4'>
        <EmailSignInForm  callbackUrl={callbackUrl} />
      </div>
      <div className='card-text pb-4 text-center'>
        or
      </div>
      <div className='card-text pb-2 text-center'>
        <div className='d-grid gap-2'>
          <GoogleSignInButton callbackUrl={callbackUrl} />
          <FacebookSignInButton callbackUrl={callbackUrl} />
        </div>
      </div>
    </div>
  )
}

export default SignInPage
