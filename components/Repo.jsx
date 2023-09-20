import { githubUsername } from '@/constants/constants'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetchRepo(name) {
  const username = githubUsername
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // 1. SSG : Static site generation
  // const response = await fetch(
  //   `https://api.github.com/repos/${username}/${name}`
  // )

  // 2. SSR : Server-side rendering
  // const response = await fetch(
  //   `https://api.github.com/repos/${username}/${name}`,
  //   { cache: 'no-store' }
  // )

  // 3. ISR : Incremental Static Generation
  // 60초마다 Static 파일을 자동으로 만든다.
  // 새로운 깃 레포지토리를 만들면 처음에는 안나타났다가 60초후에 스스로 새로운 정보를 가져가 Static File을 Update한다.
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}`,
    { next: { revalidate: 60 } }
  )
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name)
  const username = githubUsername

  return (
    <div>
      <h3 className="text-xl font-bold">
        <Link href={`https://github.com/${username}/${name}`}>{repo.name}</Link>
      </h3>
      <p>{repo.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="flex items-center gap-1">
          <FaStar /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FaCodeBranch /> {repo.forks_count}
        </span>
        <span className="flex items-center gap-1">
          <FaEye /> {repo.stargazers_count}
        </span>
      </div>
    </div>
  )
}
export default Repo
