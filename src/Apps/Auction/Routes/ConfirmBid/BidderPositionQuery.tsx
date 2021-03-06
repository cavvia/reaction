import {
  BidderPositionQuery,
  BidderPositionQueryVariables,
} from "__generated__/BidderPositionQuery.graphql"
import { graphql } from "react-relay"
import { Environment, fetchQuery } from "relay-runtime"

export const bidderPositionQuery = (
  environment: Environment,
  variables: BidderPositionQueryVariables
) => {
  return fetchQuery<BidderPositionQuery>(
    environment,
    graphql`
      query BidderPositionQuery($bidderPositionID: String!) {
        me {
          bidderPosition(id: $bidderPositionID) {
            status
            messageHeader
            position {
              internalID
              suggestedNextBid {
                cents
                display
              }
            }
          }
        }
      }
    `,
    variables,
    {
      force: true,
    }
  )
}
