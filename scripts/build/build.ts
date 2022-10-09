import { $ } from './execute'
import { defineLibBuild } from './types/define-lib-build'
import { buildStart } from './steps/buildStart'

const PATH = './scripts/build'

defineLibBuild(async () => {
  buildStart()

  await $('npm run typecheck', { successMessage: 'types checked' })
  await Promise.all([
    $(`vite build --config ${PATH}/configs/vite.cjs.ts`, { successMessage: 'cjs built' }),
    $(`vite build --config ${PATH}/configs/vite.iife.ts`, { successMessage: 'iife built' }),
    $(`vite build --config ${PATH}/configs/vite.es.ts`, { successMessage: 'esm built' }),
    $(`vite build --config ${PATH}/configs/vite.mjs.ts`, { successMessage: 'esm-node built' }),
    $('vue-tsc --project tsconfig.production.json', { successMessage: 'types built' }),
  ])
})
