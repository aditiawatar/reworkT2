
import './LastPage.css'

import logo from './images/Default.png'
import twitter from './images/twitter.png'
import insta from './images/insta.png'
import pint from './images/pinterest.png'
import link from './images/linkdin.png'
import utube from './images/utube.png'
const LastPage = () => {
  return (
    <div className="container">
    <div className="lastPage">
        <img src={logo} className='logo-last mt-5 img-fluid'></img><br/>
        <p className='lastPara text-secondary'>
            Effortlessly turn your ideas into a fully <br/>
            functional, responsive, <br/>no-code SaaS website.
            <img src={twitter} className='social'></img>
            <img src={insta} className='social'></img>
            <img src={pint} className='social'></img>
            <img src={link} className='social'></img>
            <img src={utube} className='social'></img>
        </p>
        
        <div className='info text-secondary row info2'>

    <div className='col-lg-3 col-md-6 col-sm-6 mb-4'>
        <h3 className='fs-6 text-white text-center heading'>Product</h3>
        <ul className="list-unstyled list">
            <li>Features</li>
            <li>Integration</li>
            <li>Updates</li>
            <li>FAQ</li>
            <li>Pricing</li>
        </ul>
    </div>
    
    <div className='col-lg-3 col-md-6 col-sm-6 mb-4'>
        <h3 className='fs-6 text-white text-center heading'>Company</h3>
        <ul className="list-unstyled list">
            <li>About</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Manifesto</li>
            <li>Press</li>
            <li>Contact</li>
        </ul>
    </div>
    
    <div className='col-lg-3 col-md-6 col-sm-6 mb-4'>
        <h3 className='fs-6 text-white text-center heading'>Resources</h3>
        <ul className="list-unstyled list">
            <li>Example</li>
            <li>Community</li>
            <li>Guide</li>
            <li>Docs</li>
        </ul>
    </div>
    
    <div className='col-lg-3 col-md-6 col-sm-6 mb-4'>
        <h3 className='fs-6 text-white text-center heading'>Legal</h3>
        <ul className="list-unstyled list">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Security</li>
        </ul>
    </div>

</div>

    </div>
</div>

 
  )
}

export default LastPage
