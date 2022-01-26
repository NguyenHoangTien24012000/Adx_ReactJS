import React from 'react'

export default function FooterAdxHomePage() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <div className="logo-top">
                        <img className="logo-img" src={require('../assets/images/Group 3.png')} alt="logo-top" />
                    </div>
                    <div className="logo-text">
                        <p>Một sản phẩm của</p>
                    </div>
                    <div className="logo-bottom">
                        <div className="logo-bottom-left">
                            <img className="logo-bottom-img" src={require('../assets/images/Group 9441.png')} alt="logo-left" />
                        </div>
                        <div className="logo-bottom-right">
                            <img className="logo-bottom-img" src={require('../assets/images/image 154 (1).png')} alt="logo-right" />
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <h3>Liên hệ</h3>
                    <div className="detail-contact"><img src={require('../assets/images/Vector (2).png')} alt="phone" />
                        <p>Số máy lẻ: (84 4) 7307 7979 (Ext: 62860)</p>
                    </div>
                    <div className="detail-contact"><img src={require('../assets/images/Union.png')} alt="union" />
                        <p>Hotline: 096 313 44 98</p>
                    </div>
                    <div className="detail-contact"><img src={require('../assets/images/Group 4.png')} alt="email" />
                        <p>Email: adx_support@admicro.vn</p>
                    </div>
                    <div className="social-media">
                        <div className="logo-contact space-right"><a href='' target="_blank"><img src={require('../assets/images/Vector.png')} alt="facebook" /></a></div>
                        <div className="logo-contact space-right"><a href='' target="_blank"><img src={require('../assets/images/Vector (1).png')} alt="skype" /></a></div>
                        <div className="logo-contact logo-zalo space-right"><a href='' target="_blank"><img src={require('../assets/images/image 152.png')} alt="zalo" /></a></div>
                    </div>
                </div>
                <div className="footer-address">
                    <div className="address-shared">
                        <h3>Văn phòng Hà Nội</h3>
                        <div className="address-detail">
                            <div>
                                <img src={require('../assets/images/Vector (4).png')} alt="address" />
                            </div>
                            <p>Tầng 20, Center Building Hapulico Complex, Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</p>
                        </div>
                    </div>
                    <div className="address-shared">
                        <h3>Văn phòng TP.HCM</h3>
                        <div className="address-detail">
                            <div>
                                <img src={require('../assets/images/Vector (4).png')} alt="address" />
                            </div>
                            <p>Tầng 5 Tòa Nhà 123 Tower, 123-127 Võ Văn Tần, Phường 6, Quận 3, TP. Hồ Chí Minh</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
