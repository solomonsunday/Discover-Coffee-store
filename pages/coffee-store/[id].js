import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const CofeeStore = () => {
    const router = useRouter().query.id;
    console.log(router, "router")
    return (
        <div>
            <h1 className='text-white'>Coffee Store Page </h1>
            <Link href="/"><a>Back to Home</a></Link>
        </div>
    )
}

export default CofeeStore 