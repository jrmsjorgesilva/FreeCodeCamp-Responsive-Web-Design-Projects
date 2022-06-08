import React from 'react'
import BtnGroup from '../BtnGroup'
import Button from '../Button'
import styles from '../../styles/css/Portfolio.module.css'
import flexbox from '../../styles/css/Flexbox.module.css'
import Image from 'next/image'

const PortfolioFilterPannel = ({ imgLanguages, filterPortfolio, changeCols }) => {
    return (
        <div className={styles.portfolio__filter__pannel}>
            <BtnGroup>
                <Button
                    onClick={() => changeCols(flexbox.col__12)}
                >
                    1 colunas
                </Button>
                <Button
                    onClick={() => changeCols(flexbox.col__6)}
                >
                    2 colunas
                </Button>
                <Button
                    onClick={() => changeCols(flexbox.col__4)}
                >
                    3 colunas
                </Button>
                <Button
                    onClick={() => changeCols(flexbox.col__3)}
                >
                    4 colunas
                </Button>
            </BtnGroup>
            <div className={styles.portfolio__img__filter}>
                {imgLanguages.map((img, key) => (
                    <a key={key} onClick={() => filterPortfolio(img)}>
                        <Image
                            alt='imagens a filtrar'
                            src={img}
                            width={50}
                            height={50}
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default PortfolioFilterPannel