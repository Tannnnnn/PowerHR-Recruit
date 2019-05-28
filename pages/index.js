import React from 'react'
import { withLayout } from '../hoc'
import { compose , withProps , lifecycle , withState , withHandlers } from 'recompose'
import { Jobs_Company } from './Jobs/Jobs_Company'
import { Benefit } from './Jobs/Benefit'
import { Jobs_Recruit } from './Jobs/Jobs_Recruit'
import { inject, observer } from 'mobx-react'
import {CarouselCompane} from '../components/Carousel'

const enhance = compose(
    withLayout,
    inject('authStore'),
    withState('location','setLocation'),
    withProps({
        pageTitle: 'Home'
    }),
    withHandlers({
        handleScrollView: props => () => {            
            if (props.location) {
                props.location === '/index' 
                ? window.scrollTo({
                    top: 0,
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
    }),
    observer
)
  
export default enhance((props) => 
    <div>
        {CarouselCompane ('CUPCODE CO., LTD.')}
        {props.handleScrollView()}
        <Jobs_Recruit />
        <Benefit />
        <Jobs_Company /><br/><br/>
    </div>
);