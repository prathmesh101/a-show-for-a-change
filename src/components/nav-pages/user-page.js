import React, { Component } from 'react';
import 'bootstrap';
import axios from 'axios';
import '../../assets/css/user-page.css';
import { Link } from 'react-router-dom';


//Background section with info and submit button

const MainIntro = () => {
  return (
    <div id="MainIntro" className="MainIntro" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
      <div className="content">
        <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="" />
        <h2>Season info</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
        <div className="button-wrapper">
          <MainIntroButton primary={true} text="Watch now" />
          <MainIntroButton primary={false} text="+ My list" />
          <MainIntroButton primary={false} text="Donate" />
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );

}



// submit button for the background page
const MainIntroButton = () => {
  return (
    <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
  );


}



// Title list of movies
class TitleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    apiKey: '87dfa1c669eea853da609d4968d294be',


    }
  }
  getInitialState() {
		return {data: [], mounted: false};
	}
  loadContent() {
    var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;

    $.ajax({
      url: requestUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        // console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount(){
    this.loadContent();
    this.setState({ mounted: true });
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
  }

  render() {
    if(this.state.data.results) {
      var titles = this.state.data.results.map(function(title, i) {
        if(i < 5) {

          var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
          if(!title.name) {
            var name = title.original_title;
          } else {
            var name = title.name;
          }

          return (
            <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
          );

        }
      });

    } else {
      var titles = '';
    }

    return (
      <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {titles}
          </div>
        </div>
      </div>


    );
  }

}




//hover items in title list
const Items = () => {
  return (
    <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}} >
      <div className="overlay">
        <div className="title">{this.props.title}</div>
        <div className="rating">{this.props.score} / 10</div>
        <div className="plot">{this.props.overview}</div>

      </div>
    </div>
  );

}






class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    apiKey: "87dfa1c669eea853da609d4968d294be",
      results:''

    }
  }

  getInitialState() {
    return { data: [] };
  }
  performSearch(e) {
    // stop form from submitting
    e.preventDefault();

    // get the value
    var val = $(".Search input").val();

    // Do the thing
    var requestUrl =
      "https://api.themoviedb.org/3/search/multi?query=" +
      val +
      "&api_key=" +
      this.apiKey;

    $.ajax({
      url: requestUrl,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }



  /*
  onChange(e){
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      const url = "URL goes here";
      const formData = { file: e.target.result }
      return post (url, formData)
              .then(response => console.warn("result", response))
    }
  }
  */


  render() {
    if (this.state.data.results) {
      console.log(this.state.data);
    }
    return (







      <div style={{ paddingTop: '100px', color: 'white' }}>
      <MainIntro />
      <TitleList
        title="Top TV picks for Jack"
        url="discover/tv?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Trending now"
        url="discover/movie?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title=" Horror"
        url="genre/27/movies?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Sci-Fi"
        url="genre/878/movies?sort_by=popularity.desc&page=1"
      />
      <TitleList
        title="Comedy"
        url="genre/35/movies?sort_by=popularity.desc&page=1"
      />
    </div>


        /*  <h1>Hello</h1>
        <p>Upload Video</p>
        <div onSubmit={this.onFormSubmit}>
          <input type="file" name="file" text="Upload Video" onChange={(e) => this.onChange(e)} />

        </div>


      </div>

*/


    );
  }


}






export default UserPage;
