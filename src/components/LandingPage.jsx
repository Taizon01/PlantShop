import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage(){
  return (
    <div className="landing">
      <div className="landing-card">
        <h2>GreenNest Houseplants</h2>
        <p>
          GreenNest is a small boutique company dedicated to bringing beautiful,
          affordable houseplants to homes and offices. We curate easy-care plants that purify air and
          brighten spaces — perfect for beginners and plant lovers alike.
        </p>
        <div style={{display:'flex', gap:12}}>
          <Link to="/products"><button className="btn-primary">Get Started</button></Link>
          <a href="#learn" className="btn-ghost" style={{alignSelf:'center', padding:'10px'}}>Learn More</a>
        </div>
      </div>
    </div>
  )
}
