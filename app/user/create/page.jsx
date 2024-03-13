"use client";
import React from 'react';
import { signIn, useSession } from "next-auth/react";
import AppContainer from '../../../components/AppContainer';

const page = () => {
    // const { data: session, status } = useSession();

    // console.log(session);
    // const userFound = 

    return (
        <AppContainer>
            <h2>Create page</h2>
        </AppContainer>
    )
}

export default page