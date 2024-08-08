import React, { createContext, useContext, useState } from 'react';

type TitleContextType = {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const TitleContext = createContext<TitleContextType>({
    title: '',
    setTitle: () => {},
});
export const useTitle = () => useContext(TitleContext);

export const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState('Page Title Area'); // 초기 타이틀 설정
    return <TitleContext.Provider value={{ title, setTitle }}>{children}</TitleContext.Provider>;
};
