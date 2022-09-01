import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {Route, Redirect } from "react-router-dom";
import swal from "sweetalert";
import MasterLayout from "./layouts/admin/MasterLayout";


function AdminPrivateRoute({...rest}){

    const history = useHistory();

    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/checkingAuthenticated').then( res => {
            if(res.status === 200){
                setAuthenticated(true);
            }
            setLoading(false);
        });
        return () => {
            setAuthenticated(false);
        };
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){
        if(err.response.status === 401){
            swal("Unauthorized", err.response.data.message, "warning");
            history.push('/')

        } 
        return Promise.reject(err);

    })
    
    if(loading){
        return <h1>loading....</h1>

    }


    return(
        <Route {...rest}
            render={({props, location}) =>
                Authenticated ?
                (<MasterLayout {...props} /> ):
                (<Redirect to={{pathname: "/login", state: {from: location} }} /> )
        }
    />
    );
}

export default AdminPrivateRoute;