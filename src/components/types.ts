/** The interface of a data object to be labeled. */
export interface DataObject {
  /** The universal unique id of the data object. */
  uuid: string
  /** The content of the data object. */
  value: unknown
}
