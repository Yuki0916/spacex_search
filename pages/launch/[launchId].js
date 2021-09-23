import Image from 'next/image'
import dayjs from 'dayjs'
import { GET_LAUNCH_INFO } from '../../graphQL'
import { client } from '../_app'
import Styled from '../../styles/launch.[launchId].module.scss'
const parserEmbedUrl = url =>
  `https://www.youtube.com/embed/${String(url).replace(
    /https:\/\/youtu.be\//gm,
    ''
  )}`

function parserLaunchInfo(data) {
  const _defalutImageUrl =
    'https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  const launch_date_local = data?.launch_date_utc
  const launch_date_User = dayjs(launch_date_local).format(
    'MMM D YYYY, HH:mm(Z)'
  )
  const flickr_images = data?.links.flickr_images
  const imageUrl =
    Array.isArray(flickr_images) && flickr_images.length > 0
      ? flickr_images[flickr_images.length - 1]
      : _defalutImageUrl
  return {
    id: data?.id,
    missionName: data?.mission_name,
    details: data?.details,
    imageUrl: imageUrl,
    launchSite: data?.launch_site?.site_name_long,
    launchDate: launch_date_User,
    videoLink: data?.links?.video_link,
    launchSuccess: data?.launch_success,
  }
}

export default function LaunchInfo({ launch }) {
  const {
    missionName,
    details,
    imageUrl,
    launchSite,
    launchDate,
    videoLink,
    launchSuccess,
  } = launch

  return (
    <div className={Styled.container}>
      <div className={Styled.imageContainer}>
        <div className={Styled.launchResule}>
          {launchSuccess ? 'success' : 'fail'}
        </div>
        <Image
          src={imageUrl}
          width='100%'
          height='100%'
          alt='launch_image'
          objectFit='cover'
          layout='fill'
        ></Image>
      </div>
      <h1>{missionName}</h1>
      <h4>{`${launchSite}, ${launchDate} `}</h4>
      <section className={Styled.section}>
        {details && <p>{details}</p>}
        {videoLink && (
          <iframe
            title='launchVideo'
            height='100%'
            src={parserEmbedUrl(videoLink)}
            frameBorder='0'
            allowFullScreen
          ></iframe>
        )}
      </section>
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
      launch: parserLaunchInfo(data.launch),
    },
  }
}
