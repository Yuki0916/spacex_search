import { gql } from '@apollo/client'

export const GET_LAUNCHES_LIST = gql`
  query GetLaunchesList($limit: Int! = 9, $offset: Int! = 0) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
      details
      launch_date_local
      links {
        flickr_images
      }
    }
  }
`
export const GET_LAUNCH_INFO = gql`
  query GetLaunchInfo($id: ID!) {
    launch(id: $id) {
      mission_name
      details
      launch_date_utc
      launch_success
      id
      links {
        video_link
        flickr_images
      }
      launch_site {
        site_name_long
      }
    }
  }
`
