import {useEffect, useState} from "react";
import {getGif} from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        console.log('send: '+ category)
        getGif(category)
            .then( img => {
                setState({
                    data:img,
                    loading: false
                });
            } );
    }, [ category ]);

    return state
}
