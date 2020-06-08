import React, { Component } from 'react';
import './App.css';
import Header from './dist/Header';
import Footer from './dist/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movies from "./dist/movies";
import Series from "./dist/series"
import Content from './dist/content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrays: [],
      series: [],
      movies: [],
      error: false,
      errorMessage: "",
      loading:true
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json', {
      method: 'GET', // or 'PUT'
    })
      .then(response => response.json())
      .then(data => {
        data.entries.map((src, index) => {
          if (src.programType === "movie" && src.releaseYear >= 2010) {
            return this.setState({ movies: [...this.state.movies, src] })
          } else if (src.programType === "series" && src.releaseYear >= 2010) {
            return this.setState({ series: [...this.state.series, src] })
          }
          return this.setState({loading:false});
        })
      })
      .catch((error) => {
        this.errorManager();
      });
  }

  errorManager = (errorMessage) => {
    this.setState({ error: true})
  }

  render() {
    const { error,loading,series,movies } = this.state;
    return (
      <Router>
        <div>
          <Header />
              <Route exact path="/" component={() => <Content loading={loading} error={error} />} />
              <Route exact path="/series" component={() => <Series series={series} loading={loading} error={error} />} />
              <Route exact path="/movies" component={() => <Movies movies={movies} loading={loading} error={error} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
