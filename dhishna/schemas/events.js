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
      validation : Rule => Rule.required(),
    }
    ),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'text',
      validation : Rule => Rule.required(),
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
      options: {
        list : [
          {title: 'Workshop', value: 'workshop'},
          {title: 'Competition', value: 'competition'},
          {title: 'Talk', value: 'talk'},
          {title: 'Exhibition', value: 'exhibition'},
          {title: 'Other', value: 'other'},
        ],
      },

    }),
    defineField({
      name: 'event_pay_type',
      title: 'Event_pay_type',
      type: 'string',
      options : {
        list : [
          {title: 'Free', value: 'free'},
          {title: 'Paid', value: 'paid'},
        ],
      },
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
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
    }),

  ],
})

