import React, { useState } from 'react'
import HeaderContext from '../contexts/Header.context'
import Header from '../components/Header/Header'
import GameGrid from '../components/GameGrid/GameGrid'
const Home = () => {
    const [activeHeader, setActiveHeader] = useState('top')

    return (
        <HeaderContext.Provider value={{ activeHeader, setActiveHeader }}>
            <Header />
            <GameGrid />
        </HeaderContext.Provider>
    )
}

export default Home