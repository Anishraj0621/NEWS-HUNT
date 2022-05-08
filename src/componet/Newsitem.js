import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title , description , image , newsUrl, author, date, source} = this.props
        return (
            <div>
                <div className="card">
                    <span class="badge badge-pill badge-info">Info</span>
                    <img src={!image?"https://c.ndtvimg.com/2021-12/kfol2qbc_france-coronavirus-reuters_625x300_31_December_21.jpg":image}
                     style={{height:'200px'}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 60)}... <span class="position-absolute top-0  
                    translate-middle badge rounded-pill bg-danger" style={{left:'87%', zIndex: '1'}} >{source}</span></h5>
                       
                    <p className="card-text">{description.slice(0, 84)}...</p>
                    <p class="card-text"><small class="text-muted">By {!author?'unknown': author} on {date}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
                
            </div>
            
        )
    }
}

export default Newsitem;