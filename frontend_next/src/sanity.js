import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'jwhvy7bf',
  dataset: 'production',
  apiVersion: '2023-03-26',
  useCdn: false,
});

export default client;
