import { ApiError } from "next/dist/server/api-utils"

//Initialize Unsplash ApiError


import { createApi } from 'unsplash-js';

// on your node server
const unsplashApi = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
    //...other fetch options
});

const getListOFCoffeeStores = async () => {
    const photos = await unsplashApi.search.getPhotos({
        query: 'coffee',
        // page: 1,
        perPage: 10,
        // color: 'green',
        // orientation: 'portrait',
    });
    const unsplashResult = photos.response.results;
    const photosResponse = unsplashResult.map((result) => result.urls["small"]);
    return photosResponse;

}


const getUrlForCoffeeStore = (latLong, query, limit) => {
    return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query} stores&v=20220105&limit=${limit}`
}

export const fetchCofeeStore = async () => {
    const photos = await getListOFCoffeeStores();

    const response = await fetch(getUrlForCoffeeStore(
        "43.65267326999575,-79.39545615725015",
        "coffee", 6
    ), {
        "headers": {
            'Authorization': process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
        }
    })
    const data = await response.json();

    console.log(data)

    return data.results.map((result, idx) => {
        return {
            ...result,
            imgUrl: photos[idx]
        }
    });
}