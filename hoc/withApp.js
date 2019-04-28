import React, { Component } from 'react';
import { Provider } from 'mobx-react'
import Head from 'next/head';
import { injectGlobal } from 'styled-components'
import { initAuthStore } from '../stores';

injectGlobal`
    body {
        background : #fbfbfb;
        @import url('https://fonts.googleapis.com/css?family=Kanit');
        font-family: 'Kanit', sans-serif ;
    }
`

export default function withApp(WrappedComponent) {
    return class App extends Component{
        static async getInitialProps({ req }) {
            const isServer = !process.browser
            const authStore = initAuthStore(isServer)
            return { isServer }
        }

        constructor(props) {
            super(props)
            const isServer = !process.browser
            this.authStore = initAuthStore(isServer)
        }

        render(){
            return (
                <Provider authStore={this.authStore}>
                    <main>
                        <Head>
                            <title>Recruit Job : {this.props.pageTitle}</title>
                            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"/>
                            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />     
                        </Head>
                        <WrappedComponent {...this.props}/>                        
                    </main>
                </Provider>
            )
        }
    }
}