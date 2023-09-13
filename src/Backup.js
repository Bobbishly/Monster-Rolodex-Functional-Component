import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'jhsdbsdbjkbjks',
          id: '238780'
        },
        {
          name: 'uaskhksdhksd',
          id: '2387823'
        },
        {
          name: 'jhsdsdddks',
          id: '221780'
        },
        {
          name: 'uasaw22sd',
          id: '20989773'
        },
        {
          name: 'jhs12wjkjks',
          id: '23221120'
        },
        {
          name: 'uaasliaoiksd',
          id: '2098093'
        },
        {
          name: 'jhsassasjks',
          id: '223121'
        },
        {
          name: 'uaslkpo;sd',
          id: '25445563'
        },
        {
          name: 'jhsdsjyuycks',
          id: '2322310'
        },
        {
          name: 'uaskhksdhksd',
          id: '234556563'
        },
        {
          name: 'jhsdbsdbjkbjks',
          id: '22321211'
        },
        {
          name: 'uaskhksdhksd',
          id: '34456434'
        },
        {
          name: 'jhsdbsdbjkbjks',
          id: '2232340'
        },
        {
          name: 'uaskhksdhksd',
          id: '2232344553'
        },
        {
          name: 'jhssldiksidks',
          id: '232345543'
        },
        {
          name: 'uasxczxkjkld',
          id: '23244646'
        },
        {
          name: 'jhsdmcnx,jkbjks',
          id: '2233465'
        },
        {
          name: 'uaskhwewwesd',
          id: '232344232'
        },
        {
          name: 'jhswewbjkbjks',
          id: '23823353'
        },
        {
          name: 'uaskasasasd',
          id: '2335533'
        },
        {
          name: 'jhsdbsasasks',
          id: '232444'
        },
        {
          name: 'uashasasksd',
          id: '23234535343'
        },
      ],
      changeToLowerCase: '',
    }
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
      const changeToLowerCase = event.target.value.toLocaleLowerCase();

      this.setState(() => {
        return(
          {changeToLowerCase}
        )
      })
    }

  render() {
    const returnSearch = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.changeToLowerCase)
    })


    return(
      <div className='App'>
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search Players' 
          onChange={this.onSearchChange}
        />
        {
          returnSearch.map((monster) => {
            return(
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;
