"use client"
import {useRouter} from 'next/navigation'

type Props = {}

const Page = (props: Props) => {
    const router = useRouter()
    return (
      router.push('/workflows')
    )
}

export default Page