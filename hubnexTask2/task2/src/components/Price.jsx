


import Testimonials from './Testimonials';

import p1 from './images/Pricing Card.png'
import p2 from './images/Pricing Card2.png'
import p3 from './images/Pricing Card3.png'

const Price = () => {
  return (
    <>
    

    <div className="container mt-5">
  <div className="row">
    <div className="col-12 col-sm-4 mb-3">
      <img src={p1} className="img-fluid" alt="p1" />
    </div>
    <div className="col-12 col-sm-4 mb-3">
      <img src={p2} className="img-fluid" alt="p2" />
    </div>
    <div className="col-12 col-sm-4 mb-3">
      <img src={p3} className="img-fluid" alt="p3" />
    </div>
  </div>
</div>

<Testimonials></Testimonials>

      
    </>
  );
};

export default Price;
