import { username } from "@/app/constants"
import Link from "next/link"
import { resolve } from "path"

interface RepoProps {
    name: string
}

const RepoDirs: React.FC<RepoProps> = async ({name}) => {
    //const username = ''
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN; //토큰 기입
    const response = await fetch(`https://api.github.com/repos/${username}/${name}/contents`, {
        
        headers: {
            Authorization: `token ${token}`
        }
        
    })
    if (!response.ok) {
        return <div>Error: Failed to load data</div> // 에러 처리 추가
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))
    const contents = await response.json()
    const dirs = contents.filter((content: any) => content.type === 'dir')
    //console.log(contents)
    //console.log(dirs)

    return (
        <div className="mt-2">
            <h3 className="text-x1 font-bold">Directories</h3>
            <ul>
                {
                    dirs.map((dir: any) => (
                        <li key={dir.path}>
                            <Link className="underline"
                            href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}>
                            {dir.path}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RepoDirs