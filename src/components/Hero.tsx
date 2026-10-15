import React from 'react';
import { BrushDivider } from './BrushDivider';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="inicio" className="hero-section" aria-label="Apresentação Principal">
      {/* Divisor Superior com textura artesanal conectando o cabeçalho */}
      <BrushDivider position="top" fillColor="#faf4ef" />

      <div className="hero-content container">
        <div className="hero-grid">
          {/* Coluna de Texto e Chamada de Conversão */}
          <div className="hero-text-col">
            <span className="hero-badge">
              <Sparkles size={14} />
              <span>Confeitaria Artesanal em Águas Claras</span>
            </span>

            <h1 className="hero-title">
              A Vida é Mais Doce com Momentos Especiais.
            </h1>

            <p className="hero-description">
              Tortas finas delicadamente preparadas, bolos decorados e sobremesas
              de assinatura criadas à mão com ingredientes nobres e muito afeto para celebrar a sua vida.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                onClick={onExploreClick}
                className="btn-primary-dark hero-btn"
                aria-label="Ir para o cardápio de bolos e tortas"
              >
                <span>Explorar Nosso Cardápio</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Coluna da Fotografia Gastronômica */}
          <div className="hero-image-col">
            <div className="hero-plate-wrapper">
              <img
                src="/images/hero_cupcake.jpg"
                alt="Delicado cupcake de baunilha com cobertura aveludada de morango, framboesa fresca e detalhes dourados sobre prato cerâmico artesanal"
                className="hero-dish-img"
                width={520}
                height={520}
                loading="eager"
                fetchPriority="high"
              />
              <div className="hero-image-glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Divisor Inferior com textura artesanal conectando à seção de diferenciais */}
      <BrushDivider position="bottom" fillColor="#faf4ef" />
    </section>
  );
};
