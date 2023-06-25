import styles from '../styles/Featured.module.css';
import { useState } from 'react';
import {
    FaShoppingCart,
    FaInstagram,
    FaTiktok,
    FaLocationArrow,
    FaWhatsapp,
} from 'react-icons/fa';
import Link from 'next/link';

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = ['/img/1.png', '/img/2.png', '/img/3.png'];
    const welcome = ['Selamat Datang Di Souvenir Banyuwangi'];
    const handleArrow = (direction) => {
        if (direction === 'l') {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === 'r') {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.arrowContainer}
                style={{ left: 0 }}
                onClick={() => handleArrow('l')}
            >
                <img
                    src="/img/arrowl.png"
                    alt=""
                    width="50"
                    height="50"
                    objectFit="contain"
                />
            </div>
            <div
                className={styles.wrapper}
                style={{ transform: `translateX(${-100 * index}vw)` }}
            >
                {images.map((img, i) => (
                    <>
                        <div className={styles.imgContainer} key={i}>
                            <img src={img} alt="" width="520" height="500" />
                        </div>
                        <div>
                            <h1 className={styles.Txt}>{welcome}</h1>
                            <div className={styles.Box}>
                                <ul>
                                    <FaInstagram className={styles.icons} />
                                    <Link href="https://www.instagram.com/souvenirmurah.bwi">
                                        <span className={styles.span}>
                                            souvenirmurah.bwi
                                        </span>
                                    </Link>
                                </ul>
                                <ul>
                                    <FaTiktok className={styles.icons} />
                                    <Link href="https://www.tiktok.com/@souvenir_murah_bwi">
                                        <span className={styles.span}>
                                            souvenir_murah_bwi
                                        </span>
                                    </Link>
                                </ul>
                                <ul>
                                    <FaShoppingCart className={styles.icons} />
                                    <span className={styles.span}>
                                        Souvenir, Mahar, seserahan
                                    </span>
                                </ul>
                                <ul>
                                    <FaShoppingCart className={styles.icons} />
                                    <span className={styles.span}>
                                        Bouqet, Perlengkapan Wisuda, totebag,
                                        dll
                                    </span>
                                </ul>
                                <ul>
                                    <FaLocationArrow className={styles.icons} />
                                    <span className={styles.span}>

                                        Perum. Puri Brawijaya, Blok MD 10,
                                        Kebalenan.
                                    </span>
                                </ul>
                                <ul>
                                    <FaWhatsapp className={styles.icons} />
                                    <Link href="https://l.instagram.com/?u=http%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D6281232493931&e=ATNcZmkRXUmvPxNdsNZKrQwK585JCj0kRc_Ndqxs_EgHUACrb1GTZ8k3O8PkMSMpDgY2BDjhndInE29WWB6wRw">
                                        <span className={styles.span}>

                                            +6281232493931
                                        </span>
                                    </Link>
                                </ul>
                                <ul>
                                    <Link href="/product">
                                        <button
                                            type="btn"
                                            className={styles.button}
                                        >
                                            Lihat Products
                                        </button>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div
                className={styles.arrowContainer}
                style={{ right: 0 }}
                onClick={() => handleArrow('r')}
            >
                <img
                    src="/img/arrowr.png"
                    objectFit="contain"
                    width="50"
                    height="50"
                />
            </div>
        </div>
    );
};

export default Featured;
