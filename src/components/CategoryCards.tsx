import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductCategory } from '../types';
import './CategoryCards.css';

interface CategoryCardsProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({ onSelectCategory }) => {
  const cards = [
    {
      id: 'tortas-doces' as ProductCategory,
      title: 'Tortas & Doces Finos',
      subtitle: 'Sabores Eternos Feitos para Você',
      bgColor: 'var(--color-card-pink)',
      image: '/images/cake_classic_slice.jpg',
      alt: 'Fatia artesanal de torta com creme aveludado e morango fresco',
      tag: 'Especialidades',
    },
    {
      id: 'bolos-festas' as ProductCategory,
      title: 'Bolos no Acetato & Festas',
      subtitle: 'Ricos, Indulgentes e Irresistíveis',
      bgColor: 'var(--color-card-peach)',
      image: '/images/dessert_chocolate_dome.jpg',
      alt: 'Bolo e sobremesa de chocolate nobre com acabamento espelhado e trufas',
      tag: 'Sob Encomenda',
    },
    {
      id: 'sobremesas-assinatura' as ProductCategory,
      title: 'Doces de Assinatura & Kits',
      subtitle: 'O Famoso Morango Cravejado & Afeto',
      bgColor: 'var(--color-card-lavender)',
      image: '/images/custom_creation_berry.jpg',
      alt: 'Bolo floral e sobremesas de assinatura decoradas com frutas silvestres',
      tag: 'Mais Desejados',
    },
  ];

  return (
    <section id="categorias" className="category-section" aria-label="Categorias de Produtos">
      <div className="container">
        <div className="category-header">
          <span className="section-eyebrow">Nossas Criações</span>
          <h2 className="section-title">Sabores Feitos à Mão para Conquistar</h2>
        </div>

        <div className="category-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className="category-card"
              style={{ backgroundColor: card.bgColor }}
              onClick={() => onSelectCategory(card.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(card.id);
                }
              }}
              aria-label={`Ver produtos da categoria ${card.title}`}
            >
              <div className="card-top">
                <span className="card-tag">{card.tag}</span>
                <h3 className="card-title">{card.title}</h3>
              </div>

              <div className="card-image-wrap">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="card-img"
                  loading="lazy"
                  width={340}
                  height={340}
                />
              </div>

              <div className="card-bottom">
                <span className="card-subtitle">{card.subtitle}</span>
                <div className="circle-arrow-btn" aria-hidden="true">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
