import Image from 'next/image'
import Styled from './Layout.module.scss'

export default function Layout(porps) {
  return (
    <div>
      <div className={Styled.backgroundImage}>
        <Image
          src='https://images.pexels.com/photos/6325003/pexels-photo-6325003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt='background-image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      {porps.children}
    </div>
  )
}
