import { useState } from "react";

const PressKit = () => {
  const gallery = [
    {
      src: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/attachments/files/007/294/075/original/Screen_Shot_2023-06-16_at_5.35.04_PM.jpg?1686951322",
      id: "marian-sitting",
    },
    {
      src: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/attachments/files/007/294/076/original/Screen_Shot_2023-06-16_at_5.35.34_PM.jpg?1686951346",
      id: "marian-looking",
    },
    {
      src: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/attachments/files/007/294/077/original/Screen_Shot_2023-06-16_at_5.36.32_PM.jpg?1686951454",
      id: "the-men-talking",
    },
    {
      src: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/attachments/files/007/294/083/original/Screen_Shot_2023-06-16_at_5.36.49_PM.jpg?1686951517",
      id: "stephen",
    },
    {
      src: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/attachments/files/007/294/084/original/Screen_Shot_2023-06-16_at_5.37.15_PM.jpg?1686951530",
      id: "final-shot",
    },
    {
      src: "https://filmfreeway-production-storage-01-storage.filmfreeway.com/attachments/files/007/294/085/original/Portrait_BTS.jpg?1686951531",
      id: "bts",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const portfolio_link = "https://rebecca-shoptaw.github.io/";

  const setImage = (direction: string) => {
    const curr_index = activeIndex;
    console.log(curr_index);
    if (direction == "prev") {
      if (curr_index > 0) {
        setActiveIndex(curr_index - 1);
      } else if (curr_index == 0) {
        setActiveIndex(gallery.length - 1);
      }
    } else if (direction == "next") {
      if (curr_index < gallery.length - 1) {
        setActiveIndex(curr_index + 1);
      } else {
        setActiveIndex(0);
      }
    }
  };

  return (
    <>
      <nav id="navbar">
        <header>
          <h1>
            <i>
              The Portrait of{" "}
              <span className="avoid-wrap">Mrs. John Lennox</span>
            </i>
          </h1>
          <br></br>
          <h2>
            A short film by <span className="avoid-wrap">Rebecca Shoptaw</span>
          </h2>
        </header>
        <div className="divider"></div>
        <ul className="nav-links">
          <li>
            <a className="nav-link" href="#synopsis">
              Synopsis
            </a>
          </li>
          <li>
            <a className="nav-link" href="#gallery">
              Gallery
            </a>
          </li>
          <li>
            <a className="nav-link" href="#bios">
              Bios
            </a>
          </li>
          <li>
            <a className="nav-link" href="#watch">
              Watch
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="divider"></div>
        <div id="credits">
          Site design & coding by <br></br>
          <a href={portfolio_link} target="_blank">
            Rebecca Shoptaw
          </a>
        </div>
        <div className="divider"></div>
        <div className="social-links">
          <a href="https://www.rebeccashoptaw.com/" target="_blank">
            <img
              className="black"
              src="https://cdn-icons-png.flaticon.com/512/72/72626.png"
            />
          </a>
          <a href="https://vimeo.com/rebeccashoptawfilms" target="_blank">
            <img
              className="black"
              id="vimeo"
              src="https://cdn-icons-png.flaticon.com/512/63/63191.png"
            />
          </a>
          <a href="https://www.imdb.com/name/nm6152663/" target="_blank">
            <img
              className="black"
              id="imdb"
              src="https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_Logo_Alt_Square_Black._CB443386278_.png"
            />
          </a>
        </div>
      </nav>
      <main id="main-doc">
        <section className="main-section" id="synopsis">
          <header>Synopsis</header>
          <p>
            In the late 1860s, a wealthy young man hires an artist to paint a
            portrait of his fiancée, only to find that the portrait reveals to
            him a truth about her that he would rather not know. Based on an
            early short story by Henry James,{" "}
            <i>The Portrait of Mrs. John Lennox</i> is a meditation on the
            strange communicative power of artistic representation, in which the
            painting in question is never shown. <br></br>
            <br></br>
            The film was shot entirely on Super 8 -- the director felt that this
            medium would be especially good for this film, as it gives it the
            film the feeling of something from the distant past, something long
            lost, only now being pulled from the archives.
          </p>
        </section>
        <section className="main-section" id="gallery">
          <header>Gallery</header>
          <div className="img-gallery">
            <img src={gallery[activeIndex].src} id={gallery[activeIndex].id} />
            <div id="arrows">
              <i
                className="bi bi-arrow-left"
                onClick={() => setImage("prev")}
              />
              <i
                className="bi bi-arrow-right"
                onClick={() => setImage("next")}
              />
            </div>
          </div>
        </section>
        <section className="main-section" id="bios">
          <header>Bios</header>
          <div className="bio" id="molly">
            <img src="https://c.superprof.com/i/a/23882420/10975034/600/20221120181933/molly-bremer-award-winning-princeton-university-graduate-english-with-minors-theatre-musical-theatre-and-creative.jpg" />
            <p>
              <b>Molly Bremer</b>
              <br></br>
              <i>Marian Everett</i>
              <br></br>
              <br></br>Molly Bremer is thrilled to be a part of{" "}
              <i>The Portrait of Mrs. John Lennox</i>! Film: Rebecca Shoptaw’s{" "}
              <i>New Amsterdam</i> (Mili/Narrator), <i>Mrs. Dalloway</i>{" "}
              (Sally), & an untitled Shakespeare project (Violet/Viola);
              Exemplar Pictures’ <i>Titans: Oblivion</i> (Cassandra
              Sandsmark/Wondergirl). Theatre: <i>Sweeney Todd</i> (The Hangar
              Theatre), Cabaret (The Hangar Theatre), <i>Impossible But True</i>{" "}
              (Brooklyn Tavern Theatre), <i>Broadway’s Greatest Hits</i>{" "}
              (Feinstein’s 54 Below) & <i>Love Song Saturday Night</i>{" "}
              (Feinstein’s 54 Below). BA from Princeton University and alum of
              the Chicago Academy for the Arts<br></br>
              <br></br>You can see more of her work at{" "}
              <a href="https://mollybremer.com/" target="_blank">
                mollybremer.com
              </a>
              .
            </p>
          </div>
          <div className="divider"></div>
          <div className="bio" id="liev">
            <img src="https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/casting_call/cc1281c6-c58b-4e50-a2b5-89c41ba63b0c-bWFpbi1uLW4tMC0wLTAtNTEwLTUxMA%3D%3D.JPG" />
            <p>
              <b>Liev Manck</b>
              <br></br>
              <i>John Lennox</i>
              <br></br>
              <br></br>Liev Manck is an actor and visual artist from Durham, New
              Hampshire. This was his first film with Rebecca Shoptaw.<br></br>
              <br></br>
              You can see more of his art and acting work on Instagram at{" "}
              <a href="https://www.instagram.com/lievmanck/" target="_blank">
                @lievmanck
              </a>
              .
            </p>
          </div>
          <div className="divider"></div>
          <div className="bio" id="david">
            <img src="https://m.media-amazon.com/images/S/pv-target-images/31c5a9bf2bafec832f3e1f2a29b562695ecb6db19389151c336932dec0a44aab._SX300_.jpg" />
            <p>
              <b>David Ladwig</b>
              <br></br>
              <i>Stephen Baxter</i>
              <br></br>
              <br></br>David Ladwig is an actor and musician based in NYC. This
              was his third film with Rebecca Shoptaw, after Mrs. Dalloway (in
              post- production), in which he played Septimus, and New Amsterdam,
              in which he played Marco. He also played the role of Ronnie in the
              short film What Exists.<br></br>
              <br></br>
              You can find his music on Spotify, and learn more about his acting
              work on his{" "}
              <a href="https://www.imdb.com/name/nm12048378/" target="_blank">
                IMDb page
              </a>
              .
            </p>
          </div>
          <div className="divider"></div>
          <div className="bio" id="rebecca">
            <img src="https://images.squarespace-cdn.com/content/v1/58c9909ce58c627a188f8a64/ad9e7ee7-964e-4151-96a6-e99d81353fd2/20201007.JPG" />
            <p>
              <b>Rebecca Shoptaw</b>
              <br></br>
              <i>Writer & Director</i>
              <br></br>
              <br></br>Rebecca Shoptaw is a prolific writer and director, whose
              work has been featured in publications such as{" "}
              <i>The New Yorker</i>, <i>Le Monde</i>, and <i>i- D magazine</i>,
              and screened at festivals internationally such as BFI Flare,
              NewFest, and the Pilot Light TV Festival.<br></br>
              <br></br>
              She has an abiding interest in adaptation, and is always
              experimenting, trying to figure out new ways to use cinematic
              language to take what seems untranslatable in writing and get it
              onscreen. You can see more of her work at<br></br>
              <br></br>You can see more of her work at{" "}
              <a href="https://www.rebeccashoptaw.com/" target="_blank">
                rebeccashoptaw.com
              </a>
              .
            </p>
          </div>
        </section>
        <section className="main-section" id="watch">
          <header>Watch</header>
          <div className="aspect-ratio">
            <iframe
              src="https://player.vimeo.com/video/837051127?h=0e27bc9000"
              width="640"
              height="564"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
          <p></p>
        </section>
        <section className="main-section" id="contact">
          <header>Contact</header>
          <div className="contact-info">
            <span className="contact" id="rebecca">
              <p>
                <b>Rebecca Shoptaw</b>
                <br></br>
                <a href="mailto:rebeccashoptawfilms@gmail.com">
                  rebeccashoptawfilms@gmail.com
                </a>
                <br></br>
                <a href="https://rebeccashoptaw.com/" target="_blank">
                  rebeccashoptaw.com
                </a>
                <br></br>
                <a
                  href="https://www.instagram.com/rebeccashoptawfilms/"
                  target="blank"
                >
                  @rebeccashoptawfilms
                </a>
              </p>
            </span>
            <span className="contact" id="molly">
              <p>
                <b>Molly Bremer</b>
                <br></br>
                <a href="mailto:mollybremer@gmail.com">mollybremer@gmail.com</a>
                <br></br>
                <a href="https://mollybremer.com/" target="_blank">
                  mollybremer.com
                </a>
                <br></br>
              </p>
            </span>
            <span className="contact" id="liev">
              <p>
                <b>Liev Manck</b>
                <br></br>
                <a href="https://www.instagram.com/lievmanck/" target="_blank">
                  @lievmanck
                </a>
                <br></br>
              </p>
            </span>
            <span className="contact" id="liev">
              <p>
                <b>David Ladwig</b>
                <br></br>
                <a
                  href="https://www.instagram.com/ladwigdavid/"
                  target="_blank"
                >
                  @ladwigdavid
                </a>
                <br></br>
                <a href="https://www.imdb.com/name/nm12048378/" target="_blank">
                  IMDb
                </a>
                <br></br>
              </p>
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default PressKit;
