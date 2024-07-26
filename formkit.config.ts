import { genesisIcons } from "@formkit/icons"
import { rootClasses } from "./formkit.theme"
import { DefaultConfigOptions } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'

const pro = createProPlugin('fk-6b3e4cf06a8', inputs)

const config: DefaultConfigOptions = {
  plugins: [pro],
  icons: { ...genesisIcons },
  config: { rootClasses }
}

export default config
