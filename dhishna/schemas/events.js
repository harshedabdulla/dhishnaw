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
      name: 'register',
      title: 'Link',
      type: 'string',
      validation : Rule => Rule.required(),
    }),
    defineField({
      name: 'event_type',
      title: 'Event_type',
      type: 'string',
      options: {
        list : [
          {title: 'Workshop', value: 'workshop'},
          {title: 'Competition', value: 'competition'},
          {title: 'Event', value: 'event'}
        ],
      },
      validation : Rule => Rule.required(),
    }),
    defineField({
      name: 'event_code',
      title: 'Event_code',
      type: 'number',
      validation : Rule => Rule.required(),

    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
    }),
    defineField({
      name: 'start_date',
      title: 'Start Date',
      type: 'date',
      validation : Rule => Rule.required(),
    }),
    defineField({
      name: 'start_time',
      title: 'Start Time',
      type: 'string',
    }),
    defineField({
      name: 'end_date',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'end_time',
      title: 'End Time',
      type: 'string',
    }),
    defineField({
      name:'youtube_link',
      title:'Youtube_link',
      type:'string',
    }),
    defineField({
      name: 'event_mode',
      title: 'Event_mode',
      type: 'string',
      options : {
        list : [
          {title: 'Online', value: 'online'},
          {title: 'Offline', value: 'offline'},
        ],
      },
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
    }),
    defineField({
      name: 'event_category',
      title: 'Event_category',
      type: 'string',
      options : {
        list : [
          {title: 'Arts and Culture', value: 'arts_and_culture'},
          {title: 'Children and Family', value: 'children_and_family'},
          {title: 'Professional and Technology', value: 'professional_and_technology'},
          {title: 'Colleges and Education', value: 'colleges_and_education'},
          {title: 'Sports and Outdoors', value: 'sports_and_outdoors'},
          {title: 'Youth and New Generation', value: 'youth_and_new_generation'},
          {title: 'Social and Political', value: 'social_and_political'},
          {title: 'Religious', value: 'religious'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),

    defineField({
      name: 'ticket_name',
      title: 'Ticket_name',
      type: 'string',
    }),
    defineField({
      name: 'ticket_description',
      title: 'Ticket_description',
      type: 'text',
    }),
    defineField({
      name:'ticket_start_date'
      ,title:'Ticket_start_date',
      type:'date',
    }),
    defineField({
      name:'ticket_end_date',
      title:'Ticket_end_date',
      type:'date',
    }),
    defineField({
      name:'ticket_type',
      title:'Ticket_type',
      type:'string',
      options : {
        list : [
          {title: 'Free', value: 'free'},
          {title: 'Paid', value: 'paid'},
        ],
      },
      validation : Rule => Rule.required(),
    }),
    defineField({
      name:'price',
      title:'Ticket_price',
      type:'string',
    }),
    defineField({
      name:'ticket_quantity',
      title:'Ticket_quantity',
      type:'string',
    }),
    defineField({
      name:'terms_and_conditions',
      title:'Terms_and_conditions',
      type:'text',
    }),
    defineField({
      name:'Contact',
      title:'Contact',
      type:'string',
    }),


  ],
})

