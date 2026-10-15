import React from 'react';
import { Cake, Sparkles, HeartHandshake } from 'lucide-react';
import './Differentiators.css';

export const Differentiators: React.FC = () => {
  return (
    <section className="differentiators-section" aria-label="Diferenciais da Sheila Haick">
      <div className="container">
        <div className="diff-wrapper">
          {/* Diferencial 1: Produção Diária */}
          <div className="diff-card">
            <div className="diff-icon-circle" aria-hidden="true">
              <Cake size={24} strokeWidth={1.8} />
            </div>
            <div className="diff-text">
              <h3 className="diff-title">Produção Diária & Fresca</h3>
              <p className="diff-subtitle">Bateladas artesanais preparadas todos os dias com amor e dedicação.</p>
            </div>
          </div>

          {/* Diferencial 2: Ingredientes Nobres */}
          <div className="diff-card">
            <div className="diff-icon-circle" aria-hidden="true">
              <Sparkles size={24} strokeWidth={1.8} />
            </div>
            <div className="diff-text">
              <h3 className="diff-title">Ingredientes Selecionados</h3>
              <p className="diff-subtitle">Chocolates nobres, morangos frescos e receitas familiares consagradas.</p>
            </div>
          </div>

          {/* Diferencial 3: Atendimento Acolhedor */}
          <div className="diff-card">
            <div className="diff-icon-circle" aria-hidden="true">
              <HeartHandshake size={24} strokeWidth={1.8} />
            </div>
            <div className="diff-text">
              <h3 className="diff-title">Afeto em Cada Detalhe</h3>
              <p className="diff-subtitle">Espaço acolhedor e atendimento personalizado em Águas Claras.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
