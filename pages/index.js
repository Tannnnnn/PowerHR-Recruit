import React from 'react'
import { withLayout } from '../hoc'
import { compose , withProps , lifecycle , withState , withHandlers } from 'recompose'
import { Jobs_Company } from './Jobs/Jobs_Company'
import { Benefit } from './Jobs/Benefit'
import { Jobs_Recruit } from './Jobs/Jobs_Recruit'
import { inject, observer } from 'mobx-react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components';

const ImgCarousel = styled(Image)`
    margin-Top: 65px !important;
`;

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
        <ImgCarousel src='https://firebasestorage.googleapis.com/v0/b/powerhr-auth.appspot.com/o/powerHRSaveForWebTrue.jpg?alt=media&token=a82c6662-60e6-4358-b7da-dcb863c18c2b' fluid />
        {props.handleScrollView()}
        <Jobs_Recruit />
        <Benefit />
        <Jobs_Company /><br/><br/>
    </div>
);