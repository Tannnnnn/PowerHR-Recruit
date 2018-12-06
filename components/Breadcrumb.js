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
                <Link href={'javascript:history.back()'}>
                    <ColorTextHome link>{home}</ColorTextHome>
                </Link>
                <Breadcrumb.Divider icon='right chevron' />
                <ColorBreadcrumb active>{pre}</ColorBreadcrumb>
            </Breadcrumb>
        <Divider hidden />
    </div>
)