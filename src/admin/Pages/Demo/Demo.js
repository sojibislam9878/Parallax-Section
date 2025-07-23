import { useState } from 'react';
import { data } from "./data";
import ImageModal from './ImageModal';
import "./style.scss";
import { AiOutlineShoppingCart } from '../../utils/icons';
import BButtonGroup from '../../BButtonGroup/BButtonGroup';
import Layout from '../../Layout/Layout';
const adds = "admin-dashboard";

const options = [
    { label: "All Slider", value: "all" },
    { label: "Image Slider", value: "imageSlider" },
    { label: "Posts Slider", value: "posts" },
]

const Demo = ({ upgradeLink, isPremium }) => {


    const [section, setSection] = useState("all");
    const [activeIdx, setActiveIdx] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const sectionsData = section === "all" ? Object.keys(data).map(key => data[key]?.items).flat() : data[section]?.items ? data[section]?.items : [];

    const isSet = v => v !== undefined && v !== null;

    const handleModalClose = () => {
        setIsOpen(false)
    };

    const getSectionValue = (key) => {
        if (section === "all") return data?.[key];
        return data[section]?.[key];
    };

    const col = getSectionValue("col");
    const height = getSectionValue("height");

    const dynamicStyle = {
        ...(isSet(col) && { "--bpl-admin-demo-col": col }),
        ...(isSet(height) && { "--bpl-admin-demo-item-height": height }),
    };

    return (<Layout isPremium={isPremium}>
        <div className={`${adds}-demo-wrapper`}>
            {isOpen ? <ImageModal upgradeLink={upgradeLink} image={sectionsData[activeIdx]?.img} handleModalClose={handleModalClose} data={sectionsData} activeIdx={activeIdx} /> : null}
            <div className={`${adds}-navigation-wrapper`}>
                <BButtonGroup style={{ marginBottom: "0" }} label='' fontSize='16px' options={options} activeBg='#146EF5' wrap={true} value={section} onChange={value => setSection(value)} />
                {!isPremium && <a href={upgradeLink} target='__blank' className={`${adds}-upgrade-btn-wrapper`}><button className={`${adds}-upgrade-btn`} > <AiOutlineShoppingCart />Upgrade Now</button></a>}
            </div>
            <div className={`${adds}-demo-items-container`} style={dynamicStyle}>
                {sectionsData.map((item, i) => (
                    <div className={`${adds}-demo-item`} key={i}>

                        <div className={`${adds}-demo-item-img`}
                            style={{ backgroundImage: `url(${item.img})` }} >

                            <a className='btn_overly' {...(item?.link ? { href: item.link, target: '_blank' } : {})}>
                                <p>{item.title}</p>
                            </a>
                        </div>

                        <div className="button_area">
                            <a {...(item?.link ? { href: item.link, target: '_blank' } : {})}>View Demo</a>
                            {!isPremium && <a href={upgradeLink} target='__blank'>Pricing</a>}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </Layout>
    );
};

export default Demo;