import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 'dcbtpnga',
    dataset: 'events',
    useCdn: false
})
export default client
