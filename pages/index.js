import React from 'react'
import { withLayout } from '../hoc'
import { compose , withProps , lifecycle , withState , withHandlers } from 'recompose'
import { Jobs_Company } from './Jobs/Jobs_Company'
import { Benefit } from './Jobs/Benefit'
import { Jobs_Recruit } from './Jobs/Jobs_Recruit'

const enhance = compose(
    withLayout,
    withState('location','setLocation'),
    withProps({
        pageTitle: 'Home'
    }),
    withHandlers({
        handleScrollView: props => () => {            
            if (props.location) {
                props.location === '/index' 
                ? window.scrollTo({
                    top: 1000,
                    left: 0,
                    behavior: 'smooth'
                }) 
                : null
            }
        }
    }),
    lifecycle({
        componentDidMount(){
            this.props.setLocation(window.location.pathname)
        }
    })
)
  
export default enhance((props) => 
    <div>
        {props.handleScrollView()}
        <Jobs_Company />
        <Benefit />
        <Jobs_Recruit />
    </div>
);