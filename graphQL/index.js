import { gql } from '@apollo/client'

// export const GET_LAUNCHES_LIST = gql`
//   query GetLaunchesList($offset: Int! = 0) {
//     launchesPast(limit: 10, offset: $offset) {
//       id
//       mission_name
//       launch_date_local
//       launch_site {
//         site_name_long
//       }
//       links {
//         article_link
//         video_link
//       }
//       rocket {
//         rocket_name
//         rocket_type
//       }
//       launch_success
//       details
//     }
//   }
// `
// * 前一版資料結構

// export const GET_NEXT_LAUNCH = gql`
//   query GetNextLaunch {
//     launchNext {
//       launch_date_local
//       id
//       launch_site {
//         site_name_long
//       }
//       launch_success
//       links {
//         article_link
//         video_link
//       }
//       rocket {
//         rocket_name
//         rocket_type
//       }
//       details
//       mission_name
//     }
//   }
// `
// * 前一版資料結構

export const GET_LAUNCHES_LIST = gql`
  query GetLaunchesList($offset: Int! = 0) {
    launchesPast(limit: 9, offset: $offset) {
      id
      mission_name
      details
      launch_date_local
      launch_success
      launch_site {
        site_name_long
      }
      links {
        flickr_images
      }
    }
  }
`
// ? 該一次資料全拿嗎？ 包含詳細資料也需要的資料？
