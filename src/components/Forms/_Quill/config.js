/* Default */
import dynamic from 'next/dynamic'

/* Packages */
const Quill = dynamic(
  async () => {
    const { default: Q } = await import('react-quill')
    const { default: ImageCompress } = await import('quill-image-compress')
    Q.Quill.register('modules/imageCompress', ImageCompress)
    return function forwardRef({ forwardedRef, ...props }) {
      return <Q ref={forwardedRef} {...props} />
    }
  },
  {
    ssr: false
  }
)

/* Styles */
import 'react-quill/dist/quill.snow.css'

export { Quill }

export const modules = {
  toolbar: [
    [
      { align: '' },
      { align: 'center' },
      { align: 'right' },
      { align: 'justify' }
    ],
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false
  },
  imageCompress: {
    debug: false,
    imageType: 'image/jpeg',
    insertIntoEditor: undefined,
    maxHeight: 800,
    maxWidth: 800,
    quality: 0.7,
    suppressErrorLogging: false
  }
}

export const formats = [
  'align',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video'
]
