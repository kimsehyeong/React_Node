import React from 'react';
import PlaceList from "../components/PlaceList";
import {useParams} from 'react-router-dom';


const UserPlaces = () => {
    const userId = useParams().userId; //@PathVariable와 비슷한개념이다.
    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Empire State Building',
            description: 'On of the most famous sky scrapers in ther worlds',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
            address: '20 w 24 th st , New York, NY 1001',
            location: {
                lat: 40.7484405,
                lng: -73.9878584
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Empire State Building',
            description: 'On of the most famous sky scrapers in ther worlds',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
            address: '20 w 24 th st , New York, NY 1001',
            location: {
                lat: 40.7484405,
                lng: -73.9878584
            },
            creator: 'u2'
        }
    ]

    const loadPlaces =  DUMMY_PLACES.filter(place => place.creator === userId);

    return (
        <PlaceList item={loadPlaces}/>
    );
};

export default UserPlaces;