import 'styled-components'
import { FontSizeType } from './../constants/fontSize'
import { FlexType } from '../constants/flex'
import { ColorType } from '../constants/color'

declare module 'styled-components' {
  interface DefaultTheme extends ExtendedTheme {
    color: ColorType
    flex: FlexType
    fontSize: FontSizeType
  }
}
