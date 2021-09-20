import React from 'react'
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
