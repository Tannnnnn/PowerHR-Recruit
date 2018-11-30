import React from 'react'
import { withLayout } from '../hoc'
import { compose } from 'recompose'
import { Jobs_Company } from './Jobs/Jobs_Company'
import { Benefit } from './Jobs/Benefit'
import { Jobs_Recruit } from './Jobs/Jobs_Recruit'

const enhance = compose(withLayout)
  
export default enhance(() => 
    <div>
        <Jobs_Company />
        <Benefit />
        <Jobs_Recruit />
    </div>
);