import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import {SearchBar, VideoDetail, VideoList} from './components';

const API_KEY = 'AIzaSyApGr_LdUdKfOl9ktuzaf-mEG9mXePMqnU';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('doot');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term}, videos => {
            this.setState({
                term,
                videos,
                selectedVideo: videos[0]
            });
            console.log(this.state);
        });
    }

    render() {
        const videoSearch = _.debounce((term) => this.videoSearch(term), 500);
        return <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <div>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                           videos={this.state.videos}/>
            </div>
        </div>;
    }
}

render(<App />, document.querySelector('.container'));