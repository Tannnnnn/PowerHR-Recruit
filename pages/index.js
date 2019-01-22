import React from 'react'
import { withLayout } from '../hoc'
import { compose , withProps } from 'recompose'
import { Jobs_Company } from './Jobs/Jobs_Company'
import { Benefit } from './Jobs/Benefit'
import { Jobs_Recruit } from './Jobs/Jobs_Recruit'

const enhance = compose(
    withProps({
        pageTitle: 'Home'
    }),
    withLayout,
)
  
export default enhance(() => 
    <div>
        <Jobs_Company />
        <Benefit />
        <Jobs_Recruit />
    </div>
);