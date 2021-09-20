import Image from 'next/image'
import Styled from './Layout.module.scss'

export default function Layout(porps) {
  return (
    <div>
      <div className={Styled.backgroundImage}>
        <Image
          src='https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
          alt='background-image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      {porps.children}
    </div>
  )
}
