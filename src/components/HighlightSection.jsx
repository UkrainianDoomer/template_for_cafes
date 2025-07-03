import './HighlightSection.css'
import Image from './Image';

export default function HighlightSection() {
  const leftimg = "meat2.jpg";
  const rightimg = "avokado.jpg";

    return (
      <section className="highlight-section">
      <div className="highlight-image">
        <Image src={`/cafemenu/${leftimg.startsWith('/') ? leftimg.slice(1) : leftimg}`} alt="Danie po lewej" loading="lazy" />
      </div>

      <div className="highlight-text">
        <h2>Nasza pasja na talerzu</h2>
        <p>
        Przygotowane z miłością, nasze dania łączą lokalne składniki z międzynarodowymi smakami.
        Niezależnie od tego, czy masz ochotę na tradycję czy innowację, mamy coś dla każdego.
        </p>
        <p>
        Przyjdź na jedzenie, zostań dla atmosfery. Nie tylko gotujemy — tworzymy kulinarne historie.
        </p>
      </div>

      <div className="highlight-image">
        <Image src={`/cafemenu/${rightimg.startsWith('/') ? rightimg.slice(1) : rightimg}`} alt="Danie po prawej" loading="lazy" />
      </div>
      </section>
    );
  }
