import { GET_LAUNCHES_LIST } from '../graphQL'
import dayjs from 'dayjs'
import { client } from './_app'
import { LaunchCard } from '../components/common'
import Styled from '../styles/Home.module.scss'

function parserLaunchData(launchData) {
  const launch_date_local = launchData?.launch_date_local
  const launch_date_User = dayjs(launch_date_local).format(
    'MMM D YYYY, HH:mm(Z)'
  )
  const _defalutImageUrl =
    'https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  const flickr_images = launchData?.links.flickr_images
  const imageUrl =
    Array.isArray(flickr_images) && flickr_images.length > 0
      ? flickr_images[0]
      : _defalutImageUrl

  return {
    id: launchData?.id,
    missionName: launchData?.mission_name,
    details: launchData?.details,
    imageUrl: imageUrl,
    launchDate: launch_date_User,
  }
}

export default function Home({ launches }) {
  return (
    <div className={Styled.container}>
      <div className={Styled.body}>
        {launches.map((item, key) => (
          <LaunchCard
            key={`LaunchCard${key}`}
            {...parserLaunchData(item)}
          ></LaunchCard>
        ))}
      </div>
    </div>
  )
}
export const getStaticProps = async () => {
  const { data } = await client.query({ query: GET_LAUNCHES_LIST })
  return {
    props: {
      launches: data.launchesPast,
    },
  }
}
