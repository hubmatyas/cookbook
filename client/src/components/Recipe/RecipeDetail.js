import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RecipeDetail = () => {
	
	const params = useParams();
	
	const [recipeData, setRecipeData] = useState({});


	useEffect(() => {

		// Fetch data from database using axios
		const fetchHandler = async (req, res, next) => {
		  await axios
			.get(`http://localhost:5000/recipes/${params.id}`)
			.then((res) => res.data)
			.then((data) => setRecipeData(data.recipe));
		};
		fetchHandler().then((data) => setRecipeData(data.recipe));

	  }, [params.id]);

  return (
	<>
		<section className="subpage-wrapper">
			<div className='detail-meta'>
				<h1 className="sectionTitle">{ recipeData.name }</h1>
				<p>Author: { recipeData.author }</p>
				<p>Description: { recipeData.description }</p>
				<img src={ recipeData.image } alt={recipeData.name + ' - hlavní obrázek'} loading="lazy"/>
			</div>

			<div className='article'>

				{recipeData.ingredients && recipeData.ingredients.map((ingredient) =>
					<p>{ingredient.ingredientName}</p>
				)}

			</div>	
		</section>
	</>
  )
}

export default RecipeDetail