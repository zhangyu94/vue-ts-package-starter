import type { UserConfig } from 'vite'

export const defineVitePlugin = <T extends UserConfig>(p: T): T => p
