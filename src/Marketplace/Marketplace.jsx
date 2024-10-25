import './Marketplace.css'
import imgPersonal from '../assetsPersonal/Frame.png'
import imgPersonal2 from '../assetsPersonal/Frame2.png'
import imgPersonal3 from '../assetsPersonal/Frame3.png'
import imgPersonal4 from '../assetsPersonal/Frame4.png'
import imgPersonal5 from '../assetsPersonal/Frame5.png'

function Marketplace() {
    return(
        <>
            <main>
                <section className='main2-section1'></section>

                <section className='main2-section4'>
                    <div className='folder'>
                        <div>
                            <p>Главная</p>
                            <div></div>
                            <p>Персонал</p>
                            <div></div>
                            <p>Подготовка и обучение персонала</p>
                        </div>
                        
                    </div>
                    <div className='trainin3'>
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
                        <div className='Marketplace-text'>
                            <h2>Vehicula arcu non sed dolor augue senectus scelerisque. Interdum ridiculus sed posuere.</h2>
                            <p>Ullamcorper dignissim auctor nec arcu. Ullamcorper porttitor consequat enim natoque in sed purus ut. Blandit augue eu facilisi tellus. Adipiscing turpis massa velit enim nisl risus. Praesent elementum quisque ultrices enim tortor. Enim proin at ac ullamcorper tortor semper suspendisse aliquam. Magna mauris quisque eu imperdiet. Sollicitudin diam laoreet tellus risus at rhoncus elementum. Pellentesque vel scelerisque adipiscing arcu leo nunc tristique pretium. Elementum in amet quis posuere id sollicitudin sed quis. Vulputate urna feugiat pharetra arcu donec proin sit amet justo. Mollis nunc pharetra nunc nam sed auctor. Nec non enim nisi neque elit nisl nulla. Lobortis commodo diam ut a.
                            <br /> <br />Mauris nunc vel rhoncus congue. Accumsan sit sem pretium ultrices molestie. Nisi scelerisque eget lectus purus leo integer. Diam eleifend urna ac fusce vitae aenean mauris aliquam nec. Vel adipiscing quis in erat nibh in. Vulputate rhoncus justo porttitor sem fermentum. Fusce vitae praesent turpis purus tempus tellus. Ornare gravida pellentesque eget odio.</p>
                            <div>
                                <button type="button" className='button-left'>
                                    <p>Торговая площадка</p>
                                </button>
                                <button type="button" className='button-right'>
                                    <p>Тендер</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Marketplace