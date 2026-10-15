import React from 'react';
import { MessageCircle, Calendar, CheckCircle } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './OrderCTA.css';

export const OrderCTA: React.FC = () => {
  const whatsappUrl = `https://wa.me/${businessInfo.contacts.whatsappNumber}?text=${encodeURIComponent(
    'Olá, Sheila Haick! Gostaria de consultar opções e agendar uma encomenda para uma celebração especial.'
  )}`;

  return (
    <section className="order-cta-section" aria-label="Planejamento de Encomendas">
      <div className="container">
        <div className="order-cta-card">
          <div className="cta-content">
            <span className="cta-eyebrow">
              <Calendar size={14} />
              <span>Datas Comemorativas & Eventos</span>
            </span>

            <h2 className="cta-title">
              Planejando uma Data Especial? Encomende com Antecedência!
            </h2>

            <p className="cta-text">
              Bolos personalizados no acetato, tortas inteiras e kits festa completos feitos sob medida para o seu evento.
              Converse diretamente com a nossa equipe pelo WhatsApp para escolher o sabor, tamanho e detalhes perfeitos.
            </p>

            <div className="cta-benefits">
              <div className="benefit-item">
                <CheckCircle size={18} className="benefit-icon" />
                <span>Encomendas com 24h a 48h de antecedência</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={18} className="benefit-icon" />
                <span>Retirada em Águas Claras ou entrega combinada</span>
              </div>
            </div>

            <div className="cta-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-dark cta-btn"
                title="Conversar no WhatsApp para agendar encomenda"
              >
                <MessageCircle size={20} />
                <span>Falar no WhatsApp: {businessInfo.contacts.whatsappFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
