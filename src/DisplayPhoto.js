import axios from 'axios';
import { useState, useEffect } from 'react';

const DisplayPhoto = (props) => {
    const [allPhotos, setAllPhotos] = useState([]);
    
    useEffect( () => {
        axios({
            // url: 'https://api.unsplash.com/search/photos',
            url: 'https://api.unsplash.com/photos/random',
            method: 'GET',
            dataResponse: 'json',
            params: {
                client_id: '1oYxKXc_Dr-m2Yg7dxkxadbyfHa61xqHovujsv92Xv0',
                query: 'motivational',
                count: 1
            }
        }).then((response) => {
            console.log(response.data);
            setAllPhotos(response.data);
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



// const DisplayPhoto = () => {
//     const [allPhotos, setAllPhotos] = useState([]);

//     useEffect(() => {
//         axios({
//             url: 'https://api.unsplash.com/search/photos',
//             method: 'GET',
//             dataResponse: 'json',
//             params: {
//                 client_id: '1oYxKXc_Dr-m2Yg7dxkxadbyfHa61xqHovujsv92Xv0',
//                 query: 'motivational',
//                 per_page: 30
//             }
//         }).then((response) => {
//             console.log(response.data.results);
//             setAllPhotos(response.data.results);
//         })

//     }, []);

//     return (
//         <section>
//             <h2>photo</h2>
//             <div>
//                 {
//                     allPhotos.map((photoObj) => {
//                         return (
//                             <div className="photo-container">
//                                 <img src={photoObj.urls.small} />
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </section>
//     )
// }




// export default DisplayPhoto;