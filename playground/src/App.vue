<script setup lang="ts">
import { image } from 'mypackage'

const dataObject = {
  uuid: '123',
  value: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playfair_TimeSeries-2.png/640px-Playfair_TimeSeries-2.png',
    width: 2067,
    height: 1527,
    filename: 'Playfair TimeSeries-2.png',
  },
}
const { BaseDisplay } = image
</script>

<template>
  <div style="border-width: 2px; border-style: solid; border-color: black; display: inline-flex">
    <BaseDisplay
      :data-object="dataObject"
      :style="{
        width: `${dataObject.value.width / 4}px`,
        height: `${dataObject.value.height / 4}px`,
      }"
    />
  </div>
</template>
