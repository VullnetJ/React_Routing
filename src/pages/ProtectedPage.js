import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

export const ProtectedPage = () => {
    const history = useHistory();

    const isAuthed = false;

    useEffect(() => {
        if (!isAuthed) {
            history.push('/')
        }
    });
    return (
        <h1>Only authed users should be able to use it</h1> 
    );
    // return isAuthed
    // ? (
    //     <h1>Only authed users should be able to use it</h1>
    // ) : (
    // <Redirect to="/" />
    // );
}