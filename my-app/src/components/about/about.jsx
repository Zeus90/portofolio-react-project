import React from 'react'
import "./about.css"
import award from "../../img/award.png"


const About = () => {
  return (
    <div className='a'>
    <div className="a-left">
    <div className="a-card bg"></div>
    <div className="a-card">
        <img src="https://images.pexels.com/photos/15377585/pexels-photo-15377585/free-photo-of-zwart-en-wit-wagens-verkeer-wolken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="blkCity" className="a-img" />
    </div>
    </div>
    <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel nesciunt distinctio veniam eligendi eum atque quaerat perferendis expedita in!
        </p>
        <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero reprehenderit nihil suscipit quia illum repellat blanditiis obcaecati nesciunt voluptate, laboriosam alias et accusantium ipsa nam? Ullam officia doloribus dolores fugiat, quibusdam dolore consectetur blanditiis aspernatur iure doloremque. Quam repellat nemo corporis, assumenda reiciendis perspiciatis veniam ipsam enim minima dolorem provident!
        </p>
        <div className="a-award">
            <img src={award} alt="" className="a-award-img" />
            <div className="a-award-text">
                <h4 className="a-award-title">Smooth Design</h4>
                <p className="a-award-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quaerat ut, quo praesentium fuga laborum commodi nihil veritatis quidem blanditiis.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About;
