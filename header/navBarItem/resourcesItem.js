import React from 'react'
import { ChevronRight } from 'react-feather'
import pic1 from './../../../assets/img/media/header/41.png'
import pic2 from './../../../assets/img/media/header/42.png'
import './_navBarItem.scss'
const resourcesItem = props => {
    let classHover = ["coverDropdown", ""] //in-view
       
    let classHover2 = ["dropdown-content",""]
    if (props.isHoverResources) {
        classHover = ["coverDropdown", 'in-view']
      classHover2 = ["dropdown-content","in-view"]
    }
    return (
        <div className={classHover.join(" ")} onMouseEnter ={props.enter} onMouseLeave= {props.leave}>
        <div className={classHover2.join(" ")} style ={{position : 'absolute'}}>
                <div className="coverElm">
                    <div className="ddElm">
                        <div className="dd1">
                            <img alt="img" className="imgHeader" src={pic1}></img>  
                        </div>
                        <div className="dd2">
                            <h3>{props.data[6].title}</h3>
                            <p>{props.data[6].content}</p>
                            <a href="/">
                                Read more
                                <ChevronRight href="#/" style={{color:'$blue'}} size='20'/>
                            </a>
                        </div>
                    </div>

                    <div className="ddElm">
                        <div className="dd1">
                            <img alt="img" className="imgHeader" src={pic2}></img>
                        </div>
                        <div className="dd2">
                            <h3>{props.data[7].title}</h3>
                            <p>{props.data[7].content}</p>
                            <a  href="/">
                                Read more
                                <ChevronRight href="/ " style={{color:'$blue'}} size='20'/>
                            </a>
                        </div>
                    </div>
                    <div className="ddElm3">
                        <div>
                            <p>Blog</p>
                            <p>{props.data[7].title}</p>
                            <p>{props.data[6].title}</p>
                          
                        </div>

                    </div>
                </div>

        </div>
    </div>
    )
}
export default resourcesItem;