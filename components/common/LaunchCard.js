import Image from 'next/image'
import Link from 'next/link'
import Styled from './LaunchCard.module.scss'

function LaunchCard({ id, imageUrl, launchDate, missionName, details }) {
  return (
    <div className={Styled.container}>
      {imageUrl && (
        <Link href={`launch/${id}`} passHref>
          <div className={Styled.imageContainer}>
            <Image
              className={Styled.imgae}
              src={imageUrl}
              alt={`LaunchImage${id}`}
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
        </Link>
      )}
      <Link href={`launch/${id}`} passHref>
        <div className={Styled.title}>
          <a>{missionName}</a>
        </div>
      </Link>
      <Link href={`launch/${id}`} passHref>
        <div className={Styled.time}>
          <a>{launchDate}</a>
        </div>
      </Link>
      <Link href={`launch/${id}`} passHref>
        <div className={Styled.content}>
          <a>{details}</a>
        </div>
      </Link>
    </div>
  )
}

export default LaunchCard
