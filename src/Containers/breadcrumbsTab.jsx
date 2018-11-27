import React, {Component} from "react";

export default class BreadcrumbsTab extends Component {
    render(){
        return(
            <nav>
            <div class="nav-wrapper">
              <div class="col s10">
                <a href="#!" class="breadcrumb">All</a>
                <a href="#!" class="breadcrumb">In-Progress</a>
                <a href="#!" class="breadcrumb">Completed</a>
              </div>
            </div>
          </nav>
        );
    }
}