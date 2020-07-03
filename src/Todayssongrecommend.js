import React from 'react';
import './App.css';

const Todayssongrecommend =() => {
	return(
		<div class="son bg-washed-red pa5">
			<a class="rec tc fw4 db black link hover-light-purple" href="#0">Today's Recommendation </a>
			<a class="db center mt6 mw5 tc black link dim"
			   title="Travis Scott's Highest in the Room on Spotify Music"
			   href="https://open.spotify.com/track/3eekarcy7kvN4yt5ZFzltW?si=vUimPjESRhqbPZAebaZ0Aw">

			  <img class="db ba b--black-10 grow"
			       alt="Frank Ocean Blonde Album Cover"
			       src="https://i.scdn.co/image/ab67616d0000b273e42b5fea4ac4c3d6328b622b"
			  />

			  <dl class="mt2 f6 lh-copy">
			    <dt class="clip">Title</dt>
			    <dd class="ml0">Highest in the Room</dd>
			    <dt class="clip">Artist</dt>
			    <dd class="ml0 gray">Travis Scott</dd>
			  </dl>
			</a>
		</div>


		
		);


}

export default Todayssongrecommend;