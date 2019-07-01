import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Face from './components/Face/Face';
import ImageSearchBar from './components/ImageSearchBar/ImageSearchBar';
import SignIn from './components/SignIn/SignIn';
import './App.css';
import Particles from 'react-particles-js';
import ParticleConfig from './components/particlesjs-config.json';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '461fcff70fee4560a536fc2145a633d3'
 });

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageURL:'',
      box:{}
    }
  }

  getBox=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box
    console.log(clarifaiFace);
    const image = document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    console.log(width,height);

  }

  onURLChange=(event)=>{
    this.setState({
      input: event.target.value  
    })
    
  }

  onButton=()=>{
    this.setState({
      imageURL: this.state.input
    });
    app.models.predict("a403429f2ddf4b49b307e318f00e528b",this.state.input).then(
    (response)=> {
      // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      this.getBox(response);
    }
  ).catch(err=>console.log(err));
  }


  render(){
    return (
      <div>
        <Particles className='p' params={ParticleConfig}/>
        <Nav />
        <Logo />
        <SignIn />
        <Rank />
        <ImageSearchBar onURLChange={this.onURLChange} onButton={this.onButton}/>
        <Face imageURL={this.state.imageURL}/>
        
        

      </div>
    );
  };
};

export default App;
