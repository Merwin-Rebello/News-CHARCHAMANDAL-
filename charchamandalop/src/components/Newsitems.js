import React, { Component } from 'react'

export class Newsitems extends Component {

  render() {
    let {title,description,imageurl,newsURL,author,date,source} = this.props;
    return (
      <div className='my-3'> 
            <div className="card">
              <div style={{
                display :"flex",
                justifyContent:'flex-end',
                position: 'absolute',
                right:  '0'
              }}>
              <span className=" badge rounded-pill bg-danger">
               {source}
               </span>   
              </div>
           
              {/* ternary operator used as if the image from api is null than print defaultimage.. */}
            <img src={!imageurl?"https://english.cdn.zeenews.com/sites/default/files/2023/05/27/1208530-cskvsgt.jpeg":imageurl} className="card-img-top" alt="..."/> 
            <div className="card-body">
              <h5 className="card-title">{title}  </h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className='text-danger' > By {!author ?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
              <a  rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read full article</a>
            </div>
          </div>
         </div>
    )
  }
}

export default Newsitems
