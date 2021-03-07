import React from 'react';
import Card from './Card';
import Data from './Data';
const Works = () => {
    
     
    return (
        <div className="container">
            <div>
                <h4 className=" my-5 text-center">“Service to others is the rent you pay for your room here on Earth.” <span className="font-weight-bold" >- Muhammad Ali</span> </h4>
                <form>
                <input style={{maxWidth:"400px"}} className="d-block mx-auto form-control" type="text" placeholder="Default input"/>
                <button className="d-block mx-auto mt-2 btn btn-primary btn-sm">Search</button>
                </form>
                
            </div>
            <div className="row mt-4 justify-content-center align-items-center">
            {
                Data.map(data=> <Card data={data}></Card>)
            }
        </div>
        </div>
        
    );
};

export default Works;