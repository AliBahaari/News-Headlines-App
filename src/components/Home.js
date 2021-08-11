import React, { Component } from 'react';
import '../styles/Home.css';
import axios from 'axios';
import Container from './Container';
import Error from './Error';

class Home extends Component {
  state = {
    newsObjFirst: [],
    newsObjSecond: [],
    newsObjThird: [],
    newsObjFourth: [],
    newsObjFifth: [],
    newsObjSixth: [],
  }

  componentDidMount() {

    // First
    axios({
      
      url: 'https://newsapi.org/v2/top-headlines',
      method: 'get',
      params: {
        apiKey: 'e7e3066fbafa4797ad2e3e3e29633651',
        sources: 'the-wall-street-journal'
      }

    }).then(res => {
      
      if (res.data.status === 'ok') {
        this.setState({
          newsObjFirst: res.data.articles
        });
      }

    });

    // Second
    axios({
      
      url: 'https://newsapi.org/v2/top-headlines',
      method: 'get',
      params: {
        apiKey: 'e7e3066fbafa4797ad2e3e3e29633651',
        sources: 'bbc-news'
      }

    }).then(res => {
      
      if (res.data.status === 'ok') {
        this.setState({
          newsObjSecond: res.data.articles
        });
      }

    });  

    // Third
    axios({
      
      url: 'https://newsapi.org/v2/top-headlines',
      method: 'get',
      params: {
        apiKey: 'e7e3066fbafa4797ad2e3e3e29633651',
        sources: 'al-jazeera-english'
      }

    }).then(res => {
      
      if (res.data.status === 'ok') {
        this.setState({
          newsObjThird: res.data.articles
        });
      }

    });       

    // Fourth
    axios({
      
      url: 'https://newsapi.org/v2/top-headlines',
      method: 'get',
      params: {
        apiKey: 'e7e3066fbafa4797ad2e3e3e29633651',
        sources: 'bloomberg'
      }

    }).then(res => {
      
      if (res.data.status === 'ok') {
        this.setState({
          newsObjFourth: res.data.articles
        });
      }

    });      

    // Fifth
    axios({
      
      url: 'https://newsapi.org/v2/top-headlines',
      method: 'get',
      params: {
        apiKey: 'e7e3066fbafa4797ad2e3e3e29633651',
        sources: 'business-insider'
      }

    }).then(res => {
      
      if (res.data.status === 'ok') {
        this.setState({
          newsObjFifth: res.data.articles
        });
      }

    });  

    // Sixth
    axios({
      
      url: 'https://newsapi.org/v2/top-headlines',
      method: 'get',
      params: {
        apiKey: 'e7e3066fbafa4797ad2e3e3e29633651',
        sources: 'independent'
      }

    }).then(res => {
      
      if (res.data.status === 'ok') {
        this.setState({
          newsObjSixth: res.data.articles
        });
      }

    });        

  }

  render() {
    return (

      <div className="Home">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="title">The Wallstreet Journal</h3>

            {

              this.state.newsObjFirst.length > 0 ?

              this.state.newsObjFirst.map(item => (
              
                <Container>
                  { item.title }
                </Container>

              )) :
              
              <Error>No Data...</Error>
            
            }

          </div>
          <div className="col-lg-6">
            <h3 className="title">BBC News</h3>

            {

              this.state.newsObjSecond.length > 0 ?

              this.state.newsObjSecond.map(item => (
              
                <Container>
                  { item.title }
                </Container>

              )) :
              
              <Error>No Data...</Error>
            
            }

          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">

            <h3 className="title">Al Jazeera (English)</h3>

            {

              this.state.newsObjThird.length > 0 ?

              this.state.newsObjThird.map(item => (
              
                <Container>
                  { item.title }
                </Container>

              )) :
              
              <Error>No Data...</Error>
            
            }            

          </div>
          <div className="col-lg-6">

            <h3 className="title">Bloomberg</h3>

            {

              this.state.newsObjFourth.length > 0 ?

              this.state.newsObjFourth.map(item => (
              
                <Container>
                  { item.title }
                </Container>

              )) :
              
              <Error>No Data...</Error>
            
            }            

          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">

            <h3 className="title">Business Insider</h3>

            {

              this.state.newsObjFifth.length > 0 ?

              this.state.newsObjFifth.map(item => (
              
                <Container>
                  { item.title }
                </Container>

              )) :
              
              <Error>No Data...</Error>
            
            }            

          </div>
          <div className="col-lg-6">

            <h3 className="title">Independent</h3>

            {

              this.state.newsObjSixth.length > 0 ?

              this.state.newsObjSixth.map(item => (
              
                <Container>
                  { item.title }
                </Container>

              )) :
              
              <Error>No Data...</Error>
            
            }            

          </div>
        </div>        
      </div>
    );
  }
}
 
export default Home;