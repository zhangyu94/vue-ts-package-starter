<script lang="ts">
import type { ComputedRef, PropType, Ref } from 'vue'
import { computed, defineComponent, ref, toRefs } from 'vue'
import { useElementSize } from '@vueuse/core'
import type { DataObject } from '../types'
import { calFittingTransform } from './geometry'
import type { DataObjectImage } from './types'

export default defineComponent({
  name: 'BaseDisplay',
  props: {
    /** The data object to be rendered. */
    dataObject: {
      type: Object as PropType<DataObject>,
      required: true,
    },
  },
  setup(props) {
    const dataObject = toRefs(props).dataObject as Ref<DataObjectImage>
    const container: Ref<HTMLElement | null> = ref(null)
    const { width, height } = useElementSize(container)

    const contentWidth = computed(() => dataObject.value.value.width ?? undefined)
    const contentHeight = computed(() => dataObject.value.value.height ?? undefined)
    const url = computed(() => dataObject.value.value.url ?? undefined)

    // Compute the scaling of the image to fit the svg.
    const transform: ComputedRef<string> = computed(() => {
      if (width.value === null || height.value === null) {
        return ''
      }
      if (contentWidth.value === undefined || contentHeight.value === undefined) {
        return ''
      }
      return calFittingTransform(
        {
          xMin: 0,
          xMax: contentWidth.value,
          yMin: 0,
          yMax: contentHeight.value,
        },
        width.value,
        height.value,
      )
    })

    return {
      container,
      contentWidth,
      contentHeight,
      url,
      transform,
    }
  },
})

/**
 * Implementation note:
 * - flex: 1 1 auto does not work on svg like it works on div.
 * Thus, wrap the svg with a div, make the div size responsive,
 * and update the svg with the div is resized.
 * - Set width and height attribute to 0 to undo the default
 * svg size (with width being 300 and height being 150)
 * and set width: 100%; height: 100%; to make it responsive.
 */
</script>

<template>
  <div ref="container" style="display: grid">
    <div style="grid-area: 1 / 1 / 2 / 2">
      <svg width="0" height="0" style="width: 100%; height: 100%">
        <g :transform="transform">
          <image
            style="image-rendering: pixelated"
            :href="url"
            :width="contentWidth"
            :height="contentHeight"
          />
        </g>
      </svg>
    </div>
    <slot
      name="overlay"
      :transform="transform"
      :content-width="contentWidth"
      :content-height="contentHeight"
    />
  </div>
</template>
