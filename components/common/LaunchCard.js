import Image from 'next/image'
import Link from 'next/link'
import Styled from './LaunchCard.module.scss'

function LaunchCard({ id, imageUrl, launchDate, missionName, details }) {
  return (
    <div className={Styled.Container}>
      {imageUrl && (
        <Link href={`launch/${id}`} passHref>
          <div className={Styled.ImageContainer}>
            <Image
              className={Styled.Image}
              src={imageUrl}
              alt={`LaunchImage${id}`}
              layout='fill'
              objectFit='cover'
            ></Image>
          </div>
        </Link>
      )}
      <Link href={`launch/${id}`} passHref>
        <div className={Styled.Title}>
          <a>{missionName}</a>
        </div>
      </Link>
      <Link href={`launch/${id}`} passHref>
        <div className={Styled.Time}>
          <a>{launchDate}</a>
        </div>
      </Link>
      <Link href={`launch/${id}`} passHref>
        <div className={Styled.Content}>
          <a>{details}</a>
        </div>
      </Link>
    </div>
  )
}

export default LaunchCard
