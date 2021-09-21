import Link from 'next/link'
import { GET_LAUNCH_INFO } from '../../graphQL'
import { client } from '../_app'

export default function LaunchInfo({ launch }) {
  console.log('🚀 ~ file: [launchId].js ~ line 5 ~ LaunchInfo ~ launch', launch)
  return (
    <div>
      <Link href='/'>backHome</Link>
    </div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async ctx => {
  const launchId = ctx?.params?.launchId
  const { data } = await client.query({
    query: GET_LAUNCH_INFO,
    variables: { id: launchId },
  })
  return {
    props: {
      launch: data.launch,
    },
  }
}
