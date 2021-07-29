import axios from 'axios';
import { useState, useEffect } from 'react';

const DisplayPhoto = (props) => {
    const [allPhotos, setAllPhotos] = useState([]);
    
    useEffect( () => {
        axios({
            url: 'https://api.unsplash.com/photos/random',
            method: 'GET',
            dataResponse: 'json',
            params: {
                client_id: '1oYxKXc_Dr-m2Yg7dxkxadbyfHa61xqHovujsv92Xv0',
                query: 'motivational',
                count: 1
            }
        }).then((response) => {
            setAllPhotos(response.data);
        }).catch(error => {
            return error;
        })

    }, []);

    return(
            <div className="photoContainer">
                {
                    allPhotos.map( (photoObj) => {
                        return(
                            <div className="photoImgContainer" key={photoObj.id}>
                                <img src={photoObj.urls.small}  alt={photoObj.alt_description}/>
                            </div>
                        )
                    })
                }
            </div>
    )
}


export default DisplayPhoto;
