import * as S from './Search.styled'

import { ReactComponent as LeftImage } from '../../assets/svg/leftImage.svg'
import { ReactComponent as CenterImage } from '../../assets/svg/centerImage.svg'
import { ReactComponent as RightImage } from '../../assets/svg/rightImage.svg'

function SearchSvgImages() {
  return (
    <>
      <S.LeftImageBox>
        <LeftImage />
      </S.LeftImageBox>
      <S.CenterImageBox>
        <CenterImage />
      </S.CenterImageBox>
      <S.RightImageBox>
        <RightImage />
      </S.RightImageBox>
    </>
  )
}

export default SearchSvgImages
