import cls from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import coffeeStoreData from '../../data/coffee-stores.json';

import styles from '../../styles/coffee-store.module.css';

export function getStaticProps(staticProps) {
    const params = staticProps.params;

    return {
        props: {
            CoffeeStore: coffeeStoreData.find(coffeeStore => {
                return coffeeStore.id.toString() === params.id;
            })


        }
    }
}

export function getStaticPaths(props) {
    const paths = coffeeStoreData.map((coffeeStore) => {
        return {
            params: {
                id: coffeeStore.id.toString()
            },
        };
    })

    return {
        paths,
        fallback: true,
    };
}

const CoffeeStore = (props) => {
    const router = useRouter();
    console.log(router, "router");

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const { address, name, neighbourhood, imgUrl } = props.CoffeeStore;

    const handuleUpvoteButton = () => [
        console.log("upVote Button")
    ]
    return (
        <div className='styles.layout'>
            <Head>
                <title>{name}</title>
            </Head>
            <div className={styles.container}>
                <div className='styles.col1'>
                    <div className={styles.backToHomeLink}>
                        <Link href="/"><a>Back to Home</a></Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{name}</h1>
                    </div>
                    <Image src={imgUrl}
                        width={600}
                        height={360}
                        alt={name}
                        className={styles.storeImg}
                    />
                </div>
                <div className={cls("glass", styles.col2)}>
                    <div className={styles.iconWrapper}>
                        <Image src="/statics/icons/places.svg" width={24} height={24}
                        />
                        <p className={styles.text}> {address}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/statics/icons/near-me.svg" width={24} height={24}
                        />
                        <p className={styles.text}> {neighbourhood}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/statics/icons/star.svg" width={24} height={24}
                        />
                        <p className={styles.text}> 1</p>
                    </div>
                    <button className={styles.upvoteButton}
                        onClick={handuleUpvoteButton}> Up vote
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeStore 