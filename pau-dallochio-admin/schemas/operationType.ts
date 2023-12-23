import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'operationType',
  title: 'Operación',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    })
  ],
})
