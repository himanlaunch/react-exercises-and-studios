import styles from './Description.module.css';
import React from 'react';

export function RecipeAuthor() {

    let authorLink = "https://www.justonecookbook.com/simple-chicken-curry/";

    let authorPhoto = "https://www.justonecookbook.com/wp-content/uploads/2024/07/namiko-chen-just-one-cookbook.jpg";

    let authorName = "Namiko Hirasawa Chen";

    return(

        <div className = {styles.recipeAuthorBlock}>

            <img src = {authorPhoto} length = "1000" width = "1000" alt = "Photo of Author" className = {styles.imageUpdates} />

            <div>

                <h3>

                    {authorName}

                </h3>

                <a href = {authorLink}>Blog Name</a>

            </div>

        </div>

    );

}

class RecipeDescription extends React.Component {

    render() {

        return(

            <div> 

                <div>

                    <h1>Simple Japanese chicken curry</h1>

                    <p>Delicious Japanese chicken curry recipe for a weeknight dinner! Tender pieces of chicken, carrots, and potatoes cooked in a rich, savory curry sauce, this Japanese version of curry is a must-have for your family meal. </p>

                </div>

            <RecipeAuthor />

            </div>

        );

    }

}

export default RecipeDescription