import React from 'react';
import { Heart, Sparkles, MapPin } from 'lucide-react';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="about-section" aria-label="Sobre a Sheila Haick Confeitaria">
      <div className="container">
        <div className="about-grid">
          {/* Coluna de Texto e Valores */}
          <div className="about-text-col">
            <span className="section-eyebrow">Nossa História & Essência</span>
            
            <h2 className="about-title">
              Doces Memórias Criadas com Afeto em Águas Claras
            </h2>

            <p className="about-lead">
              A <strong>Sheila Haick Confeitaria Artesanal</strong> nasceu da paixão por transformar
              momentos simples em celebrações inesquecíveis através da doçura e da confeitaria afetiva.
            </p>

            <p className="about-paragraph">
              Localizada no coração de Águas Claras, no Boulevard Norte, nossa confeitaria é mais do que uma loja:
              é um espaço de acolhimento onde cada bolo no acetato, cada fatia de torta e cada copo da felicidade
              são produzidos artesanalmente, sem atalhos industriais, priorizando sempre ingredientes frescos e nobres.
            </p>

            <div className="about-features">
              <div className="about-feature-item">
                <div className="about-feature-icon" aria-hidden="true">
                  <Heart size={20} />
                </div>
                <div>
                  <h4>Confeitaria Afetiva</h4>
                  <p>Receitas que abraçam a memória e celebram os laços familiares.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon" aria-hidden="true">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4>Atenção a Cada Detalhe</h4>
                  <p>Acabamentos manuais delicados, texturas equilibradas e frescor diário.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="about-feature-icon" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Ponto de Encontro Local</h4>
                  <p>Um recanto charmoso no Edifício Illuminato para desacelerar com um bom café.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Visual e Citação de Assinatura */}
          <div className="about-card-col">
            <div className="about-quote-card">
              <span className="quote-mark" aria-hidden="true">“</span>
              <p className="quote-text">
                Acreditamos que um doce artesanal bem feito tem o poder de iluminar o dia e eternizar sorrisos.
                Cada bolo que sai do nosso ateliê leva um pedaço do nosso coração.
              </p>
              <div className="quote-author">
                <span className="author-signature">Sheila Haick</span>
                <span className="author-role">Confeiteira & Fundadora</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
