import React from 'react'
import { withLayout } from '../hoc'
import { compose } from 'recompose'
import { Jobs_Company } from './Jobs/Jobs_Company'
import { Benefit } from './Jobs/Benefit'

const enhance = compose(withLayout)
  
export default enhance(() => 
    <div>
        <Jobs_Company />
        <Benefit />
    </div>
);