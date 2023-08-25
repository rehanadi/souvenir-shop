import { getServerSession } from "next-auth"
import { authOptions } from "@/config/auth"
import Image from "next/image"
import { avatarImage } from "@/utils/images"
import Link from "next/link"

const CustomerInfo: React.FC = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user || {}

  return (
    <div className="row mb-5">
      <div className="col-2">
        <Image 
          src={user?.image || avatarImage}
          width={75}
          height={75}
          alt={user?.name || 'Profile'}
        />
      </div>
      <div className="col-10">
        <div style={{ fontWeight: '500' }}>{user?.name}</div>
        <div>{user?.email}</div>
        <div>
          <Link href='#' className="text-success">Sign out</Link>
        </div>
      </div>
    </div>
  )
}

export default CustomerInfo
