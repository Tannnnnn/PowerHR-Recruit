import Link from 'next/link'
import { Breadcrumb , Divider } from 'semantic-ui-react'
import styled from 'styled-components';

const ColorBreadcrumb = styled(Breadcrumb.Section)`
    color: #ee3900 !important ;
`;

const ColorTextHome = styled(Breadcrumb.Section)`
    color: #000000 !important;
`;

export const Breadcrumb2Page = (home , pre , path) => (
    <div>
        <Divider hidden />
            <Breadcrumb size='large'>
                <Link href='../index'>
                    <ColorTextHome link>{home}</ColorTextHome>
                </Link>
                <Breadcrumb.Divider icon='right chevron' />
                <ColorBreadcrumb active>{pre}</ColorBreadcrumb>
            </Breadcrumb>
        <Divider hidden />
    </div>
)

export const Breadcrumb3Page = (home , befor , pre , path1 , id) => (
    <div>
        <Divider hidden />
            <Breadcrumb size='large'>
                <Link href={path1}>
                    <ColorTextHome link>{home}</ColorTextHome>
                </Link>
                <Breadcrumb.Divider icon='right chevron' />
                <Link href={{ pathname : '../JobDetail/JobDetail' , query : { id :  id  } }}>
                    <ColorTextHome>{befor}</ColorTextHome>
                </Link>
                <Breadcrumb.Divider icon='right chevron' />
                <ColorBreadcrumb active>{pre}</ColorBreadcrumb>
            </Breadcrumb>
        <Divider hidden />
    </div>
)