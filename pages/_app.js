import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Layout from '../components/layout/Layout'
import '../styles/globals.scss'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  )
}

export { client }
export default MyApp
