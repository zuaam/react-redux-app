import React from 'react';
import { connect } from 'react-redux';
// import { selectSong } from '../actions';

const songDetail = ({song}) => {
    if(!song){
        return<div><h3>Select A Song</h3></div>;
    }
    return  <div>
                <h3>Detail For:</h3>
                  <p>
                     Title: {song.title}
                    <br/>
                     Duration: {song.duration}
                  </p>
            </div>;
};

const mapStateToProps = (state) =>{
    return { song: state.selectedSong}
};

export default connect(mapStateToProps) (songDetail);