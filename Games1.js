import React, { Component } from 'react'
import './Games1.css'
import gamedata from "./data/gamedata.json"
import SearchIcon from '@material-ui/icons/Search';
import Games from './Games'

class Games1 extends Component {

    constructor(){
        super();
    
        this.state={
          search:null
        };
      }
    
      searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
      }
      

    render() {

        

        const items = gamedata.filter((data)=>{
            if(this.state.search == null)
                return data
            else if( data.title.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
          }).map(data=>{
        return (
           
            
           <Games 
           image={data.image}
           title={data.title}
           rank={data.rank}
           />
         
            
      
        
        )
    })
  
    return (
       
        <div className="search_field1">
            <SearchIcon />
        <input type="text" placeholder="Search Games"  onChange={(e)=>this.searchSpace(e)} className="game_search" />
        {items}
        </div>
      )
    
}

}

export default Games1
