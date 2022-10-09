/**
 * Compute the linear transformation that transform
 * the rectangle [xMin, xMax] x [yMin, yMax]
 * to fit the target rectangular area [0, targetWidth] x [0, targetHeight]
 * without changing the aspect ratio of the rectangle.
 */
export const calFittingTransform = (
  rect: { xMin: number; xMax: number; yMin: number; yMax: number },
  targetWidth: number,
  targetHeight: number,
): string => {
  const { xMin, xMax, yMin, yMax } = rect

  const width = xMax - xMin
  const height = yMax - yMin
  // the scale preserves the aspect ratio
  const scale = Math.min(targetWidth / width, targetHeight / height)
  const cx = (xMax + xMin) / 2
  const cy = (yMax + yMin) / 2

  // the transformation for setting the object to the center of the target
  const strCenterBackground = `translate(${targetWidth / 2}, ${targetHeight / 2})`
  // the transformation for scaling the concerned area of the object to fit the target size
  const strScale = Number.isNaN(scale) ? '' : `scale(${scale})`
  // the transformation for setting the center of the object to the (0, 0) position in the target
  const strCenterItem = Number.isNaN(cx) || Number.isNaN(cy) ? '' : `translate(${-cx}, ${-cy})`

  return strCenterBackground + strScale + strCenterItem
}
