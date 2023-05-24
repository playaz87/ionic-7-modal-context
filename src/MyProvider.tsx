import React, {useEffect, useState} from 'react';

interface MyContext {
    data: number[];
}

export const MyProviderContext = React.createContext({} as MyContext)

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [data, setData] = useState<number[]>([]);

    useEffect(() => {
        setData(new Array(10).fill(1));
    }, []);

    useEffect(() => {
        console.log('My provider data', data);
    }, [data]);


    return (
        <MyProviderContext.Provider value={{data}}>{children}</MyProviderContext.Provider>
    );
};