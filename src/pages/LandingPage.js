import { useState } from 'react';
//import '../styles/landingpage.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
//import VisitorModal from '../components/VisitorModal';

function Landingpage() {

    //const [showSubmit, setShowSubmit] = useState(false);        // showSignin "controller" 
    //const closeSubmit = () => setShowSubmit(false);

    return (
        <div className="landingpage">
            <div className="landing-wrapper">
                <div className="officer">
                    <Link to='/youtubeform'>
                        <Button
                            // className='btns'
                            // buttonStyle='btn-black-box'
                            // buttonSize='btn-large'
                        >
                            YouTube Form
                        </Button>
                    </Link>
                </div>  {/* officer */}
                <div className="officer">
                    <Link to='/oldyoutubeform'>
                        <Button
                            // className='btns'
                            // buttonStyle='btn-black-box'
                            // buttonSize='btn-large'
                        >
                            Old YouTube Form
                        </Button>
                    </Link>
                </div>  {/* officer */}
                <div className="officer">
                    <Link to='/formikcontainer'>
                        <Button
                            // className='btns'
                            // buttonStyle='btn-black-box'
                            // buttonSize='btn-large'
                        >
                            Login
                        </Button>
                    </Link>
                </div> 

                {/* <div className="visitor">
                        <Button
                            className='btns'
                            buttonStyle='btn-black-box'
                            buttonSize='btn-large'
                            //onClick={() => setShowSubmit(true)}
                        >
                            Login
                        </Button>
                </div>  */}

            </div>

            {/* <VisitorModal                   
            modal_Show={showSubmit}
            modal_Hide={closeSubmit}
            /> */}

        </div>
    );
}

export default Landingpage;
