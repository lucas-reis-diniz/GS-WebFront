import './Data.jsx'
import './Data.scss';
import Header from '../../components/Header/Header'
import Webcam from '../../components/Webcam/Webcam.jsx'

function Data() {
    return(
        <>
            <main>
                <div className='main-container'>
                    <Header/>
                    <Webcam/>
                </div>
            </main>
        </>
    )
}

export default Data