import React from 'react';

const Card = (props) =>{
	return(
		<div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" width = "100" height = "100">
		<img src = {` https://robohash.org/${props.id}?200*200`} alt ='pic' />
		 	<div>
				<h1>{ props.name }</h1>
				<p> { props.email } </p>
			</div>
		</div>
		
		);
}
export default Card;