import React, { Suspense, useContext, useEffect, useState } from 'react';
import Api from '../../service/Api.service';
import PlayButtonSVG from '../../assets/play.button.jsx';
import HeaderContext from '../../contexts/Header.context';
import {
    Box,
    BoxContainer,
    GameLabel,
    GameThumbnail,
    GameThumbnailContainer,
    GridContainer,
    HoverLayer,
    JackPotAmount,
    JackPotContainer,
    PlayButtonContainer,
    Ribbon,
    RibbonText,
} from './GameGrid.styles';

export const RenderGridItems = ({ activeHeader, gamesData, jackpotsData }) => {
    const [thumbnailHover, setThumbnailHover] = useState(false);
    const [currentGameId, setCurrentGameId] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseEnter = (gameId) => {
        if (windowWidth > 768) {
            setCurrentGameId(gameId);
            setThumbnailHover(true);
        }
    };

    const handleMouseLeave = () => {
        setThumbnailHover(false);
    };

    let data = null;

    if (activeHeader !== 'other') {
        data = gamesData.filter(({ categories }) => categories.includes(activeHeader));
    } else {
        data = gamesData.filter(({ categories }) =>
            categories.includes('ball') ||
            categories.includes('virtual') ||
            categories.includes('fun')
        );
    }

    return data.map((game, index) => {
        let ribbonText = null;

        if (activeHeader !== 'top' && game.categories.includes('top')) {
            ribbonText = 'Top';
        } else if (activeHeader !== 'new' && game.categories.includes('new')) {
            ribbonText = 'New';
        }

        const isThumbnailHovered = thumbnailHover && currentGameId === game.id;
        const jackpotData = jackpotsData.find((jackpot) => jackpot.game === game.id);

        return (
            <BoxContainer data-testid="Container" key={index}>
                <Box>
                    <GameThumbnailContainer
                        onMouseEnter={() => handleMouseEnter(game.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {isThumbnailHovered && (
                            <>
                                <HoverLayer>
                                    <PlayButtonContainer>
                                        <PlayButtonSVG />
                                    </PlayButtonContainer>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 130 }}>
                                        <GameLabel>{game.name}</GameLabel>
                                    </div>
                                </HoverLayer>
                            </>
                        )}
                        <JackPotContainer>
                            {jackpotData && <JackPotAmount>${jackpotData.amount}</JackPotAmount>}
                        </JackPotContainer>
                        <GameThumbnail src={game.image} alt="" />
                        {ribbonText && (
                            <Ribbon position={ribbonText.includes('New') ? 'right' : 'left'}>
                                <RibbonText position={ribbonText.includes('New') ? 'right' : 'left'}>
                                    {ribbonText}
                                </RibbonText>
                            </Ribbon>
                        )}
                    </GameThumbnailContainer>
                </Box>
            </BoxContainer>
        );
    });
};

const GameGrid = () => {
    const [gamesData, setGamesData] = useState([]);
    const [jackpotsData, setJackpotsData] = useState([]);
    const { activeHeader } = useContext(HeaderContext);

    useEffect(() => {
        const fetchGamesData = async () => {
            try {
                const response = await Api.get('games.php');
                setGamesData(response.data);
            } catch (error) {
                console.error('Error fetching games data:', error);
            }
        };

        fetchGamesData();
    }, []);

    useEffect(() => {
        const fetchJackpotsData = async () => {
            try {
                const response = await Api.get('jackpots.php');
                setJackpotsData(response.data);
            } catch (error) {
                console.error('Error fetching games data:', error);
            }
        };

        fetchJackpotsData();

        const interval = setInterval(fetchJackpotsData, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Suspense fallback={<label>Loading...</label>}>
            <GridContainer>
                <RenderGridItems activeHeader={activeHeader} gamesData={gamesData} jackpotsData={jackpotsData} />
            </GridContainer>
        </Suspense>
    );
};

export default GameGrid;
