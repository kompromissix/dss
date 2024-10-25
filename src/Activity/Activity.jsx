import './Activity.css'
import imgPersonal from '../assetsPersonal/Frame.png'
import imgPersonal2 from '../assetsPersonal/Frame2.png'
import imgPersonal3 from '../assetsPersonal/Frame3.png'
import imgPersonal4 from '../assetsPersonal/Frame4.png'
import imgPersonal5 from '../assetsPersonal/Frame5.png'

function Activity() {
    return(
        <>
            <main>
                <section className='main2-section1'></section>

                <section className='main2-section3'>
                    <div className='folder'>
                        <div>
                            <p>Главная</p>
                            <div></div>
                            <p>Персонал</p>
                            <div></div>
                            <p>Подготовка и обучение персонала</p>
                        </div>
                        
                    </div>
                    <div className='trainin2'>
                        <div className='menu'>
                            <button type="button">
                                <p>Персонал</p>
                                <img src={imgPersonal} alt="" />
                            </button>
                            <button type="button">
                                <p>Деятельность</p>
                                <img src={imgPersonal2} alt="" />
                            </button>
                            <button type="button">
                                <p>Акционерам</p>
                                <img src={imgPersonal3} alt="" />
                            </button>
                            <button type="button">
                                <p>Инвесторам</p>
                                <img src={imgPersonal4} alt="" />
                            </button>
                            <button type="button">
                                <p>Контакты</p>
                                <img src={imgPersonal5} alt="" />
                            </button>
                        </div>
                        <div className='Activity-text'>
                            <div className='number-Activity'>
                                <div className='Onetofive-top'>
                                    <p>1</p>
                                </div>
                                <div className='hr'></div>
                                <div className='Onetofive-top'>
                                    <p>2</p>
                                </div>
                                <div className='hr'></div>
                                <div className='Onetofive-top'>
                                    <p>3</p>
                                </div>
                            </div>
                            <div className='text-Activity'>
                                <div>
                                    <h2>Nisl justo etiam gravida platea iaculis pellentesque quis malesuada. Quam.</h2>
                                    <p>Tellus nisl ut auctor odio integer. Duis gravida magnis turpis proin duis pharetra arcu velit elit. Adipiscing felis phasellus commodo ac ridiculus. Egestas dis massa nisi tempor pellentesque enim. Nec fames ut enim feugiat morbi. Accumsan suspendisse a congue morbi nisi posuere ante condimentum lacus. Arcu orci imperdiet tortor vel hendrerit sollicitudin at fermentum curabitur.</p>
                                </div>
                                <div>
                                    <h2>Euismod sed adipiscing ut iaculis sed lectus ac eu. Viverra faucibus sed mi.</h2>
                                    <p>Purus neque risus semper eu. Hac eu nulla tincidunt ullamcorper vitae tincidunt sed vulputate. Amet ac dapibus nunc neque faucibus urna velit sed sed. Purus enim viverra tortor maecenas. Diam rhoncus sed eu turpis sed in laoreet lobortis ac. Dui pellentesque congue ut molestie amet turpis vitae tellus vitae. Nec morbi eget lacus dui urna. Nibh ac arcu.</p>
                                </div>
                                <div>
                                    <h2>Non neque pellentesque augue amet pulvinar. Aenean cras vivamus molestie.</h2>
                                    <p>Sit leo diam vitae scelerisque senectus bibendum urna. Sed amet fusce fermentum sed lacus aliquet nisl. Amet enim mauris tempor justo id odio pharetra. Sapien laoreet arcu et molestie et. Eleifend lectus nulla sit viverra tempus bibendum purus tristique diam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Activity