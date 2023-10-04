import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'DHISHNA',

  projectId: 'dcbtpnga',
  dataset: 'events',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
