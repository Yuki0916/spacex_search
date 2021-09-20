/* eslint-disable jsx-a11y/anchor-is-valid */
// ! 僅完成切版，尚未完成跳轉功能 先暫時忽略eslint error
import Image from 'next/image'
import Styled from './LaunchCard.module.scss'

function LaunchCard({ id, imageUrl, launchDate, missionName, details }) {
  return (
    <div className={Styled.Container}>
      {imageUrl && (
        <div className={Styled.ImageContainer}>
          <Image
            className={Styled.Image}
            src={imageUrl}
            alt={`LaunchImage${id}`}
            layout='fill'
            objectFit='cover'
          ></Image>
        </div>
      )}
      <div className={Styled.Title}>
        <a href='#'>{missionName}</a>
      </div>
      <div className={Styled.Time}>
        <a href='#'>{launchDate}</a>
      </div>
      <div className={Styled.Content}>
        <a href='#'>{details}</a>
      </div>
    </div>
  )
}

export default LaunchCard
