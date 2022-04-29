import cls from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import coffeeStoreData from '../../data/coffee-stores.json';
import { fetchCofeeStore } from '../../lib/coffee-stores';

import styles from '../../styles/coffee-store.module.css';

export async function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log(params, "params_data")
    const coffeestores = await fetchCofeeStore();


    return {
        props: {
            CoffeeStore: coffeestores.find(coffeeStore => {
                return coffeeStore.fsq_id === params.id;
            })


        }
    }
}

export async function getStaticPaths(props) {
    const coffeestores = await fetchCofeeStore();

    const paths = await coffeestores.map((coffeeStore) => {
        return {
            params: {
                id: coffeeStore.fsq_id
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
    const { location, name, neighbourhood, imgUrl } = props.CoffeeStore;

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
                    <Image src={imgUrl || "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"}
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
                        <p className={styles.text}> {location.address}</p>
                    </div>
                    {location.neighbourhood && <div className={styles.iconWrapper}>
                        <Image src="/statics/icons/near-me.svg" width={24} height={24}
                        />
                        <p className={styles.text}> {location.neighbourhood}</p>
                    </div>}
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