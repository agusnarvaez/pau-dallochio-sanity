import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'propertyType',
  title: 'Tipo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    })
  ],
})
