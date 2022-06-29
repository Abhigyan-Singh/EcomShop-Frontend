const today = new Date()
export const inStoreServices = (facilityId) => {
  return fetch(`https://liveapi.yext.com/v2/accounts/2903957495944679166/entities/${facilityId}?api_key=78de6e2905bde12aaacc15e2662d4ec2&v=20220623`)
}