import Image from 'next/image'
import Link from 'next/link'
import Styled from './Layout.module.scss'

export default function Layout(porps) {
  return (
    <div className={Styled.container}>
      <div className={Styled.backgroundImage}>
        <Image
          src='https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
          alt='background-image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={Styled.header}>
        <Link href='/' passHref>
          SpaceX LaunchList
        </Link>
      </div>
      {porps.children}
    </div>
  )
}
