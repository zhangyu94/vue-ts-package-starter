import type { DataObject } from '../types'

/** The interface of an image data object. */
export interface DataObjectImage extends DataObject {
  /** The universal unique id of the data object. */
  uuid: string
  /** The content of the data object. */
  value: {
    /** The url of the image. */
    url: string | null
    /** The width of the image. */
    width: number | null
    /** The height of the image. */
    height: number | null
    /** The filename of the image. */
    filename?: string | null
  }
}
