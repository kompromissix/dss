import './Personal.css'
import imgPersonal from '../assetsPersonal/Frame.png'
import imgPersonal2 from '../assetsPersonal/Frame2.png'
import imgPersonal3 from '../assetsPersonal/Frame3.png'
import imgPersonal4 from '../assetsPersonal/Frame4.png'
import imgPersonal5 from '../assetsPersonal/Frame5.png'
import { noways } from './data'
import lapsha from '../assetsPersonal/Rectangle42.png'
import zafod from '../assetsPersonal/Rectangle43.png'
import { Link } from 'react-router-dom'


function Onetofive(sa) {
    return(
        <div>
            <div>
                {sa.number}
            </div>
            <div>
                <p>{sa.text}</p>
            </div>
        </div>
    ) 
}


function Personal() {
    return(
        <>
            <main>
                <section className='main2-section1'></section>

                <section className='main2-section2'>
                    <div className='folder'>
                        <div>
                            <p>Главная</p>
                            <div></div>
                            <p>Персонал</p>
                            <div></div>
                            <p>Подготовка и обучение персонала</p>
                        </div>
                        
                    </div>
                    <div className='training'>
                        <div className='menu'>
                            <Link className='vov' to='/AboutTheCompany'>
                                <button type="button">
                                    <p>Персонал</p>
                                    <img src={imgPersonal} alt="" />
                                </button>
                            </Link>
                            <Link className='vov' to='/AboutTheCompany'>
                                <button type="button">
                                    <p>Деятельность</p>
                                    <img src={imgPersonal2} alt="" />
                                </button>
                            </Link>
                            <Link className='vov' to='/AboutTheCompany'>
                                <button type="button">
                                    <p>Акционерам</p>
                                    <img src={imgPersonal3} alt="" />
                                </button>
                            </Link>
                            <Link className='vov' to='/AboutTheCompany'>
                                <button type="button">
                                    <p>Инвесторам</p>
                                    <img src={imgPersonal4} alt="" />
                                </button>
                            </Link>
                            <Link className='vov' to='/AboutTheCompany'>
                                <button type="button">
                                    <p>Контакты</p>
                                    <img src={imgPersonal5} alt="" />
                                </button>
                            </Link>
                        </div>
                        <div>
                            <div className='block-top'>
                                <div>
                                    <img src={lapsha} alt="" />
                                    <div>
                                        <h2>Sit nisl nunc consequat magna consequat</h2>
                                        <p>A amet lectus lorem nisi aenean enim consequat adipiscing. Donec cursus scelerisque at aliquet iaculis mollis mi morbi enim. Sed et consectetur nec tempor nam auctor in at. Purus varius feugiat elit sed enim nisl sit a fermentum. Amet suscipit quam et adipiscing faucibus mollis non. Pellentesque dui in cursus quam diam eget. Odio nunc facilisis orci feugiat lorem. Orci malesuada et diam feugiat ornare neque nulla pellentesque venenatis.</p>
                                    </div>
                                </div>
                                <div>
                                    <h1>Donec nisl non tortor semper. Fusce neque turpis nibh vestibulum eu morbi tristique curabitur. Laoreet volutpat sodales nibh tincidunt urna. Cras proin nibh.</h1>
                                    <div>
                                        <div>
                                           <Onetofive {...noways[0]}/> 
                                           <Onetofive {...noways[1]}/> 
                                           <Onetofive {...noways[2]}/> 
                                        </div>
                                        <div>
                                            <Onetofive {...noways[3]}/> 
                                            <Onetofive {...noways[4]}/> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Hendrerit fringilla aliquet lacus urna faucibus cursus bibendum cras. Ultrices eu diam elementum tortor cursus. Ipsum rutrum id accumsan porttitor. Accumsan aliquet sed ut tortor pretium quis vitae dui. Scelerisque sit quam in viverra sit blandit nisi augue ut. Posuere at enim eget semper commodo.
                                    Aenean varius porttitor risus sed morbi. A nisl etiam tincidunt aliquam dui leo tellus ut. Sapien turpis accumsan ornare cursus diam nisl. Enim sapien non mauris ultricies. Netus proin a aliquet placerat et. Risus sapien in pharetra faucibus. Et nunc morbi eu sollicitudin facilisi.</p>
                                    <img src={zafod} alt="" />
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p>Amet ac justo sem quisque non aliquam condimentum lectus. Malesuada viverra cras fames ornare quis. Commodo sapien amet nascetur porttitor dictum in sagittis cursus. Faucibus enim nec purus neque. Egestas donec semper duis lectus egestas blandit. Massa nisl ullamcorper platea ultrices auctor scelerisque sollicitudin nulla auctor. Quisque quis sed quisque enim velit nec praesent. Vitae nunc vulputate praesent risus scelerisque adipiscing faucibus. Nec pellentesque pulvinar urna ut rhoncus risus sit. Vulputate viverra ac lacus elit sed venenatis. Pellentesque odio in malesuada enim interdum arcu ut cursus tellus.
                                    Vitae pretium sit tempus quisque tincidunt diam in. Faucibus tortor nec felis malesuada in arcu. Sollicitudin odio turpis tincidunt cursus. Tortor tempor nisi orci at sed et condimentum nunc ut. Porta etiam nulla nibh pretium eu aliquam vel integer blandit. Eleifend nisl platea orci aliquam etiam sed. Facilisis tortor ultrices nisi congue malesuada a quis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Personal