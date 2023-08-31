import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skQDrsbHba4pBfAVh8btA9kgdq7zcZhwfWzYHkxuD6hqMUEJUNQaJkqDTh4PT6SCwCUXkUXzxYlaQSND1j1KCnHNLZRNRL5UUMlJJUCD4xpHAS8Qvh60VWDhv9JlV4BdSFksQFBrk2mxGO5MpNem8nfy1hlZICVBrt6AK1sbRFRPJkFFIOrH",
})
