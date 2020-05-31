import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: {movies},
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({movies, isLoading: false}); // API로부터 데이터를 로딩했다면 준비완료 표시
    }

    componentDidMount() { // render()후 실행
        // 영화 데이터 로딩!
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return <div>{isLoading ? 'Loading...' : movies.map((movie) => {
            return <Movie key={movie.id} poster={movie.medium_cover_image} summary={movie.summary} year={movie.year} id={movie.id} title={movie.title} />
        })}</div>;
    }
}

export default App;
