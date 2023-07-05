import { useContext } from 'react';
import axios from 'axios';
import { NotificationContext } from 'providers/notificationProvider';

const RestaurantApi = () => {
    const { displayNotification } = useContext(NotificationContext);

    const getAllRestaurant = async () => {
        const result = await axios.get(process.env.REACT_APP_STRAPI_URL + '/restaurants')
        .then(response => {
            return response.data.data;
        }).catch(error => {
            displayNotification('Error trying to fetch restaurant list', 'success');
            console.error("[Error - API] Error calling getAllRestaurant", error);
        });

        return result;
    }

    return {
        getAllRestaurant: getAllRestaurant
    };
}

export default RestaurantApi;