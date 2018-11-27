import React, {Component} from "react";

export default class BreadcrumbsTab extends Component {
    render(){
        return(
            <nav>
            <div class="nav-wrapper" style={{backgroundColor: '#45494b'}}>
              <div class="col s12">
                <a href="#!" className="breadcrumb">All</a>
                <a href="#!" className="breadcrumb">In-Progress</a>
                <a href="#!" className="breadcrumb">Completed</a>
              </div>
            </div>
          </nav>
        );
    }
}