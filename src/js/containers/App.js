import React, {Component} from 'react';
import { findIndex, cloneDeep } from 'lodash';
import { Fragment } from 'react';


// import './App.scss';
import { person as Person } from 'views/Person';

/**
 * @desc some description
 * @example
 * import { App } from 'containers/App';
 */
export class App extends Component {
  constructor( props ) {
    super( props );

    this. state = {
      persons:[
        {id: '1', name:'Dhruv',age:'22'},
        {id: '2', name:'Shankar',age:'21'},
        {id: '3', name:'Jaden',age:'20'}
      ],
      isActive: false
    }

    this.handleNameChange = this.handleNameChange.bind( this );
    this.switchNameHandler = this.switchNameHandler.bind( this );
    this.togglePersonListHandler = this.togglePersonListHandler.bind( this );
    this.deletePersonHandler=this.deletePersonHandler.bind(this);
  }

  switchNameHandler() {
    this.setState( {
      persons:[
        { id: '1', name:'Rajat', age:'21' },
        { id: '2', name:'Lokesh', age:'19' },
        { id: '3', name:'Sarvjeet', age:'22' }
      ]
    } );
  }

  handleNameChange ( event, id ) {
    var personIndex = findIndex( this.state.persons, { id: id } );  //find index and in 2nd argument we can pass the object
    var persons = cloneDeep( this.state.persons );                  // it will copy array by value not by reference
    persons[ personIndex ].name = event.target.value;

    this.setState( { persons : persons} );
  }
  
  togglePersonListHandler() {
    this.setState( {
      isActive: ! this.state.isActive
    } );
  }

  deletePersonHandler(id){
    const personIndex=findIndex(this.state.persons,{id:id});
    const persons=cloneDeep(this.state.persons);
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  
  render(){  
    
    // const classes=[];
    // if(this.state.isActive==false){   way to add css classes dyanamically
    //   classes.push('person-out');
    // } `App__button--active-${ this.state.isActive }` -> 'App__button--active-false'

    return (
      <div className="App">
        <h1>Person App</h1>
        <button className={`App__button App__button--active-${ this.state.isActive }`} onClick={this.togglePersonListHandler}>
          { this.state.isActive ? 'Hide names!' : 'Show names!' }
        </button>

        {
          this.state.isActive ? (
            <div className="person">
              <button className="person__button" onClick={this.switchNameHandler}>Switch Names!</button>
              {
                this.state.persons.map( ( person ) => {
                  return (
                      <Person 
                      key={ person.id }
                      id={ person.id }
                      name={person.name} 
                      age={person.age}
                      onChange={this.handleNameChange}
                      click={this.deletePersonHandler} />
                    );
                } )
              }
            </div>

          ) : null
        }
        <p className="App__devname">Developed By-Rajat</p>
      </div>
      



      
  
      //React.createElement('div',null,'h1','hey rajat from new way')
      // this.switchNameHandler.bind(this,'kite') for dynamic pass value to state change
    );
  }
}