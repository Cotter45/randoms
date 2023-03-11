import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/modal";


function Home() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const closeModal = () => {
    setShowModal(false);
  }
  return (
    <main className="main_container fade_in">
      <header id="top" className="section">
        <h2>Hello, World!</h2>
        <section>
          <p>
            My name is Sean and welcome to my little API project, this is mainly
            a small project that I will be adding to over time to test any new
            technologies I'm trying to learn. Since I will be needing the data,
            maybe other folks will too! So I made it public, please don't abuse
            it. Or do, let's see what it can handle.
          </p>
        </section>
        <h3>Table of Contents</h3>
        <ul className="list">
          <li>
            <a className="scroll" href="#parks">
              Parks - {window.location.origin + "/api/parks"}
            </a>
          </li>
          <li>
            <a className="scroll" href="#cocktails">
              Cocktails - {window.location.origin + "/api/cocktails"}
            </a>
          </li>
        </ul>
      </header>
      <section className="section">
        <aside className="top">
          <a className="scroll" href="#top">
            Top
          </a>
        </aside>
        <section id="parks" className="header">
          <div>
            <h3>1. Parks</h3>
            <code>{window.location.origin + "/api/parks"}</code>
          </div>
          <button
            onClick={() => navigate("/randoms/parks")}
            type="button"
            name="Parks"
            className="link"
          >
            Parks
          </button>
        </section>
        <article className="list_column">
          <p>
            This is a section of the API under <code>/parks</code> where you can
            query for national park data and a few pictures of each park. The
            quality is not great as they've been severely minimized. For example
            -
          </p>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => {
              setModalImage(window.location.origin + "/images/acadia_2.png");
              setShowModal(!showModal);
            }}
            className="image"
            src={window.location.origin + "/images/acadia_2.png"}
            alt="Park test example"
          />
          <p>
            Not so bad when it's small, or less than 500px, but if you click on
            the image and view it in the modal you'll see what I mean. There are
            currently 4 routes available and a bunch of pictures - 5 pictures
            for each park.
          </p>
        </article>
      </section>
      <section className="section">
        <aside className="top">
          <a className="scroll" href="#top">
            Top
          </a>
        </aside>
        <section id="cocktails" className="header">
          <div>
            <h3>2. Cocktails</h3>
            <code>{window.location.origin + "/api/cocktails"}</code>
          </div>
          <button
            onClick={() => navigate("/randoms/cocktails")}
            type="button"
            name="Cocktails"
            className="link"
          >
            Cocktails
          </button>
        </section>
        <article className="list_column">
          <p>
            This is a section of the API under <code>/cocktails</code> where you
            can query for 77 different cocktails, their ingredients and some
            light instruction on how to make them. They each have one image for
            now, same quality as parks -
          </p>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => {
              setModalImage(window.location.origin + "/images/old_fashioned.png");
              setShowModal(!showModal);
            }}
            className="image"
            src={window.location.origin + "/images/old_fashioned.png"}
            alt="Park test example"
          />
          <p>
            You can also use this api to query for 34 types of liqour and it
            will return the drinks that use that liquor. This is a bit of a work
            in progress, where I could add query params and only return drinks
            with specific liquors, but with 77 total, a front end filter should
            be fine for now.
          </p>
        </article>
      </section>
      {showModal && (
        <Modal onClose={closeModal}>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => setShowModal(!showModal)}
            className="modal_image"
            src={modalImage}
            alt="Park test example"
          />
        </Modal>
      )}
    </main>
  );
}

export default Home;