import { GET_LAUNCHES_LIST } from '../graphQL'
import { client } from './_app'
import Styled from '../styles/Home.module.scss'

export default function Home(props) {
  console.log('🚀 ~ file: index.js ~ line 6 ~ Home ~ props', props)
  return <div className={Styled.container}>Home page</div>
}
export const getStaticProps = async () => {
  const { data } = await client.query({ query: GET_LAUNCHES_LIST })
  return {
    props: {
      launches: data.launchesPast,
    },
  }
}
