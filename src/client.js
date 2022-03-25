import SanityClient from '@sanity/client';

export default SanityClient({
  projectId: '97w26pbk',
  dataset: 'production',
  apiVersion: "2022-03-25",
  useCdn: true
})
