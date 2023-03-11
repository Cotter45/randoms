import { useState, useEffect } from 'react';
import { Modal } from '../components/modal';

import { Cocktail, CocktailPicture, Ingredient } from '../types/cocktail_types';

function Cocktails() {

  const [loaded, setLoaded] = useState(false);
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [randomCocktail, setRandomCocktail] = useState<Cocktail>();
  const [randomImage, setRandomImage] = useState<CocktailPicture>();
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [byIngredients, setByIngredients] = useState<Ingredient[]>();

  useEffect(() => {
    if (loaded) return;

    (async () => {
      const url = window.location.origin;
      const response = await fetch(url + "/api/cocktails");
      const data = await response.json();

      if (data) setCocktails(data);

      const fetchIngredients = await fetch(url + "/api/cocktails/ingredients");
      const ingredients = await fetchIngredients.json();

      if (ingredients) setIngredients(ingredients);

      const byIngredients = await fetch(url + "/api/cocktails/ingredients/lime");
      const byIngData = await byIngredients.json();

      if (byIngData) setByIngredients(byIngData);
    })();

    setLoaded(true);
  }, [loaded])

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const getRandomCocktail = async () => {
    const url = window.location.origin;
    const response = await fetch(url + "/api/cocktails/random_cocktail");
    const data = await response.json();
    return setRandomCocktail(data);
  };

  const getRandomImage = async () => {
    const url = window.location.origin;
    const response = await fetch(url + "/api/cocktails/random_picture");
    const data = await response.json();
    return setRandomImage(data.picture);
  };

  return (
    <main className="main_container fade_in">
      <header id="top" className="section">
        <h2>Hello, Cocktails!</h2>
        <article>
          <p>
            Welcome to the cocktails section of this api where you can learn a
            whole lot or forget a whole lot. There are {cocktails.length}{" "}
            different types of cocktails currently, as well as their
            ingredients, main staples have alcohol by volume and one image for
            each. There are a ton of cocktails out there and a ton of different
            ways to make them, I take no responsibility for the 'accuracy' of
            these recipes!
          </p>
        </article>
        <h3>Table of Contents</h3>
        <ul className="list">
          <li>
            <a className="scroll" href="#cocktails">
              GET /api/cocktails
            </a>
          </li>
          <li>
            <a className="scroll" href="#cocktail">
              GET /api/cocktails/cocktail/:id
            </a>
          </li>
          <li>
            <a className="scroll" href="#random_picture">
              GET /api/cocktails/random_picture
            </a>
          </li>
          <li>
            <a className="scroll" href="#random">
              GET /api/cocktails/random_cocktail
            </a>
          </li>
          <li>
            <a className="scroll" href="#ingredients">
              GET /api/cocktails/ingredients
            </a>
          </li>
          <li>
            <a className="scroll" href="#by_ingredients">
              GET /api/cocktails/ingredients/:ingredient
            </a>
          </li>
          <li>
            <a className="scroll" href="#photos">
              GET /images/:photo_#.png
            </a>
          </li>
        </ul>
      </header>

      <section id="cocktails" className="section">
        <aside className="top">
          <a className="scroll" href="#top">
            Top
          </a>
        </aside>
        <h2>
          Route - <code>GET /api/cocktails</code>
        </h2>
        <article className="list_column">
          <h3>Example Return</h3>
          <pre>{JSON.stringify(cocktails[0], null, 2)}</pre>
          <p>
            This is just <code>/api/cocktails/cocktail/1</code> because the
            entire list would take up a lot of space, but the format is exactly
            the same.
          </p>
        </article>
      </section>

      <section id="cocktail" className="section">
        <aside className="top">
          <a className="scroll" href="#top">
            Top
          </a>
        </aside>
        <h2>
          Route - <code>GET /api/cocktails/cocktail/:id</code>
        </h2>
        <article className="list_column">
          <h3>Example Return</h3>
          <pre>{JSON.stringify(cocktails[14], null, 2)}</pre>
        </article>
      </section>

      <section id="random_picture" className="section">
        <aside className="top">
          <a className="scroll" href="#top">
            Top
          </a>
        </aside>
        <h2>
          Random - <code>GET /api/cocktails/random_picture</code>
        </h2>
        <p>
          This route will serve the relative location of a random picture, so
          just plug it right into a source tag with the origin to display a
          random image!
        </p>
        <code>
          {window.location.origin + "/api/cocktails/random_picture"}
        </code>
        <section className="list_column">
          <button
            onClick={() => getRandomImage()}
            type="button"
            name="Get Random Park Image"
            className="link"
          >
            Get Random
          </button>
          {randomImage && (
            <img
              className="image fade_in"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                setModalImage(window.location.origin + randomImage);
                setShowModal(!showModal);
              }}
              src={window.location.origin + randomImage}
              alt="Random example"
            />
          )}
        </section>
      </section>

      <section id="random" className="section">
        <aside className="top">
          <a className="scroll" href="#top">
            Top
          </a>
        </aside>
        <h2>
          Random - <code>GET /api/cocktails/random_cocktail</code>
        </h2>
        <p>
          This route will serve up a randomly picked cocktail from one of the 77
          cocktails. It will return it in the same format as the{" "}
          <code>/api/cocktails/cocktail/:id</code> but I'll add the preview here
          just in case you like clicking buttons like I do.
        </p>
        <code>
          {window.location.origin + "/api/cocktails/random_cocktail"}
        </code>
        <section className="list_column">
          <button
            onClick={() => getRandomCocktail()}
            type="button"
            name="Get Random Park Info"
            className="link"
          >
            Get Random
          </button>
          {randomCocktail && (
            <article className="list_column fade_in">
              <h3>Example Return</h3>
              <h5>{randomCocktail.name}</h5>
              <pre>{JSON.stringify(randomCocktail, null, 2)}</pre>
            </article>
          )}
        </section>
      </section>

      <section id="ingredients" className="section">
        <aside className="top">
          <a className="scroll" href="#top">
            Top
          </a>
        </aside>
        <h2>
          Random - <code>GET /api/cocktails/ingredients</code>
        </h2>
        <p>
          This route will serve up a list of all the basic ingredients, like
          alcohol and even orange juice. This is a list of all the ingredients, simple strings.
        </p>
        <code>
          {window.location.origin + "/api/cocktails/ingredients"}
        </code>
        <section className="list_column">
          {ingredients && (
            <article className="list_column fade_in">
              <h3>Example Return</h3>
              <h4>Ingredients</h4>
              <pre>{JSON.stringify(ingredients, null, 2)}</pre>
            </article>
          )}
        </section>
      </section>

      <section id="by_ingredients" className="section">
        <aside className="top">
          <a className="scroll" href="#top">
            Top
          </a>
        </aside>
        <h2>
          Random - <code>GET /api/cocktails/ingredients/:ingredient</code>
        </h2>
        <p>
          This route will serve up a list of all the basic ingredients, like
          alcohol and even orange juice as well as all of it's relational data.
          This includes Cocktails and Ingredients for each Cocktail.
        </p>
        <code>
          {window.location.origin + "/api/cocktails/by_ingredients"}
        </code>
        <section className="list_column">
          {byIngredients && (
            <article className="list_column fade_in">
              <h3>Example Return</h3>
              <h4>Ingredient: lime</h4>
              <pre>{JSON.stringify(byIngredients, null, 2)}</pre>
            </article>
          )}
        </section>
      </section>

      <section id="photos" className="section">
        <aside className="top">
          <a className="scroll" href="#top">
            Top
          </a>
        </aside>
        <h2>
          Photos - <code>GET /images/:photo_#.png</code>
        </h2>
        <p>
          All photos are served out of the public directory, so you'll need to
          use the domain + <code>/images/dark_n_stormy.png</code>, for
          example:
        </p>
        <code>
          {window.location.origin + "/images/dark_n_stormy.png"}
        </code>
        <figure className="list_column">
          <img
            style={{ cursor: "pointer" }}
            className="image"
            onClick={(e) => {
              setModalImage(window.location.origin + "/images/dark_n_stormy.png");
              setShowModal(!showModal);
            }}
            src={window.location.origin + "/images/dark_n_stormy.png"}
            alt="Caipirinha example"
          />
        </figure>
      </section>
      {showModal && (
        <Modal onClose={closeModal}>
          <img
            onClick={() => setShowModal(!showModal)}
            style={{ cursor: "pointer" }}
            className="modal_image"
            src={modalImage}
            alt="Example Fetch"
          />
        </Modal>
      )}
    </main>
  );
}

export default Cocktails;