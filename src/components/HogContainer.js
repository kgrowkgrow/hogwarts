import React, { Component } from 'react';
import Hog from "./Hog"

class HogContainer extends Component {
    sortedByName = [...this.props.hogs].sort((a,b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()

        if (nameA < nameB) {
            return -1;
        } 
        if (nameA > nameB) {
            return 1;
        }
        return 0
    })

    sortedByWeight = [...this.props.hogs].sort((a,b) => b.weight - a.weight)
    
    render() {
        if (this.props.sort) {
            return (
                <div className="ui twelve wide column">
                    {this.sortedByName.map(hog => {
                      if (this.props.greased === "Greased Hogs") {
                      return hog.greased ? <Hog key={hog.name} hog={hog}/> : null 
                    } else if (this.props.greased === "Ungreased Hogs") {
                        return hog.greased ? null : <Hog key={hog.name} hog={hog}/> 
                    } else {
                        return <Hog key={hog.name} hog={hog}/>
                    }
                } )}
                </div>
            );
        } else {

            return (
                <div className="ui eight wide column">
                    {this.sortedByWeight.map(hog => {
                      if (this.props.greased === "Greased Hogs") {
                      return hog.greased ? <Hog key={hog.name} hog={hog}/> : null 
                    } else if (this.props.greased === "Ungreased Hogs") {
                        return hog.greased ? null : <Hog key={hog.name} hog={hog}/> 
                    } else {
                        return <Hog key={hog.name} hog={hog}/>
                    }
                } )}
                </div>
            );
        }
    }
}

export default HogContainer;
