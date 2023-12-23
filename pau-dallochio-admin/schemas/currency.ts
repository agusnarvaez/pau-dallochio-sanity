import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'currency',
  title: 'Moneda',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    })
  ],
})
