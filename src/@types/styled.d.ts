import 'styled-components/native'

// biome-ignore lint/style/useImportType: <explanation>
import theme from '@theme/index'

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}