import React from 'react'
import Link from 'next/link'
import { FaEye, FaStar } from 'react-icons/fa'
import { username } from '../constants'

//const username = 'bigwales98'

export default async function ReposPage() {
    //1. SSG: Static Site Generation 정적페이지 생성
    const response = await fetch(`https://api.github.com/users/${username}/repos`)

    //2. SSR: Server-Side Rendering 동적페이지 생성
    /*
    const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
        { cache: 'no-store' }
    ) 
    */

    //3. ISR: Incremental Static Generation 일정 시간 간격으로 페이지 갱신
    /*
    const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
        { next: {revalidate: 60} }
    )
    */
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const repos = await response.json()

    //console.log(repos)

  return <div>
    <h2 className='text-2x1 font-bold mb-4'> Github repositories of {username}</h2>
    <ul>
        {repos.map((repo: any) => (
                <li key={repo.id} className='bg-gray-100 m-4 p-6 rounded-md w-full h-auto'>
                    <Link href={`/repos/${repo.name}`}>
                        <h3 className='text-2xl font-bold'>{repo.name}</h3>
                        <p> {repo.description}</p>
                        <div className='flex items-center justify-between'>
                            <span className='flex items-center gap-1'>
                                <FaStar /> {repo.stargazers_count}
                            </span>
                            <span className='flex items-center gap-1'>
                                <FaEye /> {repo.watchers_count}
                            </span>
                        </div>
                    </Link>
                </li>
            ))
        }
    </ul>
  </div>
}