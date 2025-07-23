import { __ } from '@wordpress/i18n';
import Layout from '../Layout/Layout';
import { free_pro_feature_list } from './json-data/free-pro-feature-list';
import { check, close } from '../utils/icons';

const ProVsFree = ({ isPremium }) => {
    return <>
        <Layout isPremium={isPremium}>
            <div className="headerArea">
                <h2>{__('Free vs Pro Comparison', 'slider')}</h2>
                <a className="action-button" href="tools.php?page=parallax-section-dashboard-pricing" target='_self' rel="noopener noreferrer">Upgrade to Pro Now</a>
            </div>
            <div className="feature-section">
                <div className="feature-container">
                    <div className="free-pro-feature">
                        <div className="feature-table-wrapper">
                            <table className="feature-table">
                                <thead>
                                    <tr>
                                        <th>FEATURES</th>
                                        <th>Free</th>
                                        <th><span className="crown">👑</span> PRO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>All Free Version Features</td>
                                        <td>{check}</td>
                                        <td>{check}</td>
                                    </tr>

                                    {
                                        free_pro_feature_list?.map((list, index) => {
                                            return <tr key={index}>
                                                <td> {list?.title}
                                                    {list?.new && <span className="label new">NEW</span>}
                                                    {list?.hot && <span className="label hot">HOT</span>}
                                                </td>
                                                {
                                                    !list?.status ? <>
                                                        <td>{check}</td>
                                                        <td>{check}</td>
                                                    </> : <>
                                                        <td>{close}</td>
                                                        <td>{check}</td>
                                                    </>
                                                }
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

        <div className="pro-upgrade-section">
            <h2>Upgrade To PRO &amp; Enjoy Advanced Features!</h2>
            <p>
                Over <strong>2000+</strong> people are already using Info Card to design beautiful, customizable cards and content boxes on their websites—why not join them?
            </p>

            <div className="buttons">
                <a href="tools.php?page=parallax-section-dashboard-pricing" target='_self' rel='noreferrer' className="btn btn-primary">Upgrade to Pro Now!</a>
                <a href="https://bblockswp.com/demo/parallax-section/" target='_blank' rel='noreferrer' className="btn btn-link">Live Demo</a>
                <a href="https://bplugins.com/support/" target='_blank' className="btn btn-link" rel='noreferrer'>Support</a>
            </div>
        </div>
    </>
}
export default ProVsFree;