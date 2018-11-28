import Link from 'next/link'
import { Breadcrumb } from 'semantic-ui-react'

export const Breadcrumb2Page = (home , pre , path) => (
    <Breadcrumb size='large'>
        <Link href={'javascript:history.back()'}>
            <Breadcrumb.Section link>{home}</Breadcrumb.Section>
        </Link>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section active>{pre}</Breadcrumb.Section>
    </Breadcrumb>
)