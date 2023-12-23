import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'property',
  title: 'Inmueble',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Tipo',
      type: 'reference',
      to: {type: 'propertyType'},
    }),
    defineField({
      name: 'street',
      title: 'Calle y número',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'Ciudad',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
    }),
    defineField({
      name: 'currency',
      title: 'Tipo',
      type: 'reference',
      to: {type: 'currency'},
    }),
    defineField({
      name: 'area',
      title: 'Superficie Total',
      type: 'number',
    }),
    defineField({
      name: 'coveredArea',
      title: 'Superficie Cubierta',
      type: 'number',
    }),
    defineField({
      name: 'rooms',
      title: 'Habitaciones',
      type: 'number',
    }),
    defineField({
      name: 'bathRooms',
      title: 'Baños',
      type: 'number',
    }),
    defineField({
      name: 'cover',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'operation_type',
      title: 'Tipo de operación',
      type: 'reference',
      to: [{type: 'operationType'}],
    }),
    defineField({
      name: 'garage',
      title: 'Cocheras',
      type: 'number',
    }),
    defineField({
      name: 'geo_lat',
      title: 'Latitud',
      type: 'number',
    }),
    defineField({
      name: 'geo_long',
      title: 'Longitud',
      type: 'number',
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [{type: 'image'}],
    }),
    /* defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }), */
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
