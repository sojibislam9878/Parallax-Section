import { useState } from 'react';
import Layout from '../Layout/Layout';
import { changeLog, helpItem } from '../utils/options';
import { minus, plus } from '../utils/icons';

const Welcome = ({ isPremium }) => {
    const [isChangeLog, setIsChangeLog] = useState(false);

    const handleCreateNewPage = (e) => {
        e.preventDefault();

        const baseUrl = window.location.origin;
        const adminPath =
            window.location.hostname === "localhost"
                ? "/wordpress/wp-admin/post-new.php?post_type=page"
                : "/wp-admin/post-new.php?post_type=page";
        window.location.href = baseUrl + adminPath;
    };


    return (
        <>
            <Layout isPremium={isPremium}>
                <div className="feature-section">
                    <div className="feature-container">
                        <div className="bblocks_welcome_container">
                            <div className="bblocks_left_area">
                                <div className="bblocks_left">
                                    <h1>Welcome to Info Cards</h1>
                                    <p>The Info Cards Block Plugin for WordPress allows you to create beautifully designed and informative cards within your content. With this plugin, you can present your content interactively and engagingly, making it easier for your audience to consume and understand your message.</p>
                                    <div className="img">
                                        <img src="https://ps.w.org/info-cards/assets/banner-1544x500.png?rev=3190158" alt="image" />
                                    </div>
                                    <div className="logo_title">

                                        <div className="logo">
                                            <img src="https://ps.w.org/info-cards/assets/icon-128x128.png?rev=2881794" alt="logo_image" />
                                        </div>
                                        <div className="title">
                                            <h3>Info Cards – Gutenberg block for creating Beautiful Cards</h3>
                                            <span>by</span>
                                            <a href="https://bplugins.com" target="_blank" rel="noopener noreferrer">
                                                bPlugins
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bblocks_left_btn">
                                    <a className='action-button' href="#" onClick={handleCreateNewPage}>
                                        Create New Page
                                    </a>
                                    <a className='action-button' href="https://bplugins.com" target="_blank" rel="noopener noreferrer">
                                        Visit Our Website
                                    </a>
                                </div>
                            </div>

                            <div className="bblocks_right">
                                {helpItem?.map((item, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <h2>{item?.title}</h2>
                                            <p>{item?.description}</p>
                                            <a className='action-button' href={item?.link} target="_blank" rel="noopener noreferrer">
                                                {item?.linkText}
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <div className="changelog">
                <div className="toggleArea">
                    <div className="headerArea" onClick={() => setIsChangeLog(!isChangeLog)}>
                        <div className="text">
                            Get updates on our new features by checking out the changelog
                        </div>
                        <div className="icon">{isChangeLog ? minus : plus}</div>
                    </div>

                    {isChangeLog && changeLog.map((log, index) => {
                        return <div key={index} className="item">
                            <div className="changelog_title">
                                {/* {log?.title} */}
                                <span className='date'>{log?.date}</span>
                            </div>

                            <ul className='list'>
                                {
                                    log?.list.map((item, token) => { return <li key={token}>{item?.title}</li> })
                                }

                            </ul>
                        </div>
                    })
                    }
                </div>
            </div>
        </>
    );
};

export default Welcome;
