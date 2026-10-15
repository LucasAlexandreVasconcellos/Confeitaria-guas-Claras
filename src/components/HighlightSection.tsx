import React from 'react';
import { Coffee, ArrowRight } from 'lucide-react';
import { ProductCategory } from '../types';
import './HighlightSection.css';

interface HighlightSectionProps {
  onExploreCoffee: (cat: ProductCategory) => void;
}

export const HighlightSection: React.FC<HighlightSectionProps> = ({ onExploreCoffee }) => {
  return (
    <section id="cafeteria" className="highlight-section" aria-label="Destaque de Cafeteria e Salgados">
      <div className="container">
        <div className="highlight-grid">
          {/* Coluna da Imagem */}
          <div className="highlight-image-col">
            <div className="highlight-img-wrapper">
              <img
                src="/images/coffee_latte_art.jpg"
                alt="Xícara de cappuccino cremoso com arte latte em formato de tulipa, acompanhada de biscoito artesanal em mesa de madeira"
                className="highlight-dish-img"
                width={480}
                height={480}
                loading="lazy"
              />
              <div className="highlight-badge">
                <Coffee size={16} />
                <span>Cafés Especiais & Salgados</span>
              </div>
            </div>
          </div>

          {/* Coluna de Texto e Chamada de Conversão */}
          <div className="highlight-text-col">
            <span className="section-eyebrow">A Dupla Perfeita</span>
            
            <h2 className="highlight-title">
              Sabor & Aconchego em Cada Xícara
            </h2>

            <div className="highlight-squiggle" aria-hidden="true">
              <svg width="48" height="8" viewBox="0 0 48 8" fill="none">
                <path
                  d="M1 4C5 1 9 7 13 4C17 1 21 7 25 4C29 1 33 7 37 4C41 1 45 7 47 4"
                  stroke="#9e646d"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="highlight-description">
              Do café espresso encorpado ao cappuccino vaporizado com arte delicada, cada bebida é
              preparada com grãos nobres para ser a companhia inesquecível dos nossos bolos, tortas e salgados artesanais.
            </p>

            <p className="highlight-subtext">
              Venha desfrutar de uma pausa acolhedora no Boulevard Norte ou solicite seu café e salgado artesanal para viagem.
            </p>

            <div className="highlight-actions">
              <button
                type="button"
                onClick={() => onExploreCoffee('cafeteria-salgados')}
                className="btn-primary-dark"
                aria-label="Ver opções de cafeteria e salgados no cardápio"
              >
                <span>Ver Cafeteria & Salgados</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
