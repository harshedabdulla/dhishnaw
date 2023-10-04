import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'register',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'uniquecode',
      title: 'Uniquecode',
      type: 'number',
    }), 
    defineField({
      name: 'event_type',
      title: 'Event_type',
      type: 'string',
    }),
    defineField({
      name: 'event_pay_type',
      title: 'Event_pay_type',
      type: 'string',
    }),
    defineField({
      name: 'event_code',
      title: 'Event_code',
      type: 'number',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),

  ],
})

