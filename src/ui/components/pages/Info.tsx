import * as styles from './styles/info.styl';
import * as React from 'react';
import {Trans, translate} from 'react-i18next';
import {BigLogo} from '../head';
import { I18N_NAME_SPACE } from '../../appConfig';

@translate(I18N_NAME_SPACE)
export class Info extends React.Component {

    render() {
        return <div className={`${styles.content} body1`}>
            <BigLogo className={`${styles.logoLeft} margin-main`} noTitle={true}/>

            <div className="margin-main basic500">
                <Trans i18nKey='info.keepUp'>
                    Waves Enterprise Keeper — is the safest way to interact with third-party web resources with Waves-integrated functionality or DApps. Using Waves Enterprise Keeper, you can sign transactions and remain safe from malicious sites.
                </Trans>
            </div>

            <a rel="noopener noreferrer" className="link black" target='_blank' href='https://support.wavesenterprise.com/servicedesk/customer/portal/3'>Support</a>

            <div className={`${styles.social} margin-main`}>
                <div className="margin-main basic500">
                    <Trans i18nKey='info.joinUs'>Join the Waves Enterprise Community</Trans>
                </div>
                <ul>
                    <li className={styles.github}><a rel="noopener noreferrer" target="_blank" href="https://github.com/waves-enterprise"></a></li>
                    <li className={styles.telegram}><a rel="noopener noreferrer" target="_blank" href="https://t.me/wavesenterprise"></a></li>
                    <li className={styles.twitter}><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/wavesprotocol"></a></li>
                    <li className={styles.medium}><a rel="noopener noreferrer" target="_blank" href="https://wavesenterprise.medium.com/"></a></li>
                    <li className={styles.youtube}><a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCtXaDBBFq30kv7dlBO0xD9w"></a></li>
                </ul>
            </div>

            <div className="basic500">&copy; Waves Enterprise</div>

        </div>;
    }
}
