import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const locales = ['en', 'de'] as const

const Post = defineDocumentType(() => {
  return {
    name: 'Post',
    filePathPattern: 'posts/**/*.mdx',
    fields: {
      language: {
        type: 'enum',
        options: locales,
        required: true
      }
    },
    computedFields: {
      locale: {
        type: 'enum',
        options: locales,
        resolve(doc) {
          return doc['language']
        }
      }
    }
  }
})

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post]
})