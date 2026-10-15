import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './LocationSection.css';

export const LocationSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="localizacao" className="location-section" aria-label="Endereço e Atendimento">
      <div className="container">
        <div className="location-grid">
          {/* Coluna de Informações e Horários */}
          <div className="location-info-col">
            <span className="section-eyebrow">Onde Estamos</span>
            
            <h2 className="location-title">
              Venha Sentir o Aroma do Nosso Café em Águas Claras
            </h2>

            <p className="location-description">
              Um ambiente acolhedor e charmoso no Boulevard Norte, perfeito para o seu café da tarde,
              reuniões descontraídas ou para retirar sua encomenda fresquinha.
            </p>

            <div className="location-cards-list">
              {/* Card 1: Endereço */}
              <div className="info-box">
                <div className="info-icon" aria-hidden="true">
                  <MapPin size={22} />
                </div>
                <div className="info-text">
                  <h3>Endereço</h3>
                  <p>
                    {businessInfo.address.mall}, {businessInfo.address.unit}<br />
                    {businessInfo.address.street}<br />
                    {businessInfo.address.neighborhood}, {businessInfo.address.city} - {businessInfo.address.state}<br />
                    CEP: {businessInfo.address.zip}
                  </p>
                  <span className="info-reference">Ref: {businessInfo.address.reference}</span>
                </div>
              </div>

              {/* Card 2: Horários */}
              <div className="info-box">
                <div className="info-icon" aria-hidden="true">
                  <Clock size={22} />
                </div>
                <div className="info-text">
                  <h3>Horário de Funcionamento</h3>
                  <p>
                    <strong>{businessInfo.hours.weekdays}</strong><br />
                    <span>{businessInfo.hours.weekends}</span>
                  </p>
                </div>
              </div>

              {/* Card 3: Contato Direto */}
              <div className="info-box">
                <div className="info-icon" aria-hidden="true">
                  <Phone size={22} />
                </div>
                <div className="info-text">
                  <h3>WhatsApp & Encomendas</h3>
                  <p>{businessInfo.contacts.whatsappFormatted}</p>
                </div>
              </div>
            </div>

            {/* Ações de Localização */}
            <div className="location-actions">
              <a
                href={businessInfo.contacts.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-dark"
                title="Abrir rota no Google Maps em nova aba"
              >
                <Navigation size={18} />
                <span>Abrir Rota no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Coluna do Mapa com Privacy-First (LGPD) */}
          <div className="location-map-col">
            <div className="map-frame-wrapper">
              {mapLoaded ? (
                <iframe
                  title="Mapa de Localização - Sheila Haick Confeitaria em Águas Claras"
                  src={businessInfo.contacts.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="embedded-map-iframe"
                />
              ) : (
                <div className="map-consent-placeholder">
                  <div className="map-placeholder-icon">
                    <MapPin size={40} />
                  </div>
                  <h3>Mapa Interativo do Google Maps</h3>
                  <p>
                    Para respeitar sua privacidade e economizar dados (LGPD), o mapa interativo só é carregado
                    quando solicitado por você.
                  </p>
                  <button
                    type="button"
                    className="btn-primary-rose"
                    onClick={() => setMapLoaded(true)}
                    aria-label="Carregar mapa interativo do Google Maps"
                  >
                    <span>Carregar Mapa Interativo</span>
                  </button>
                  <div className="map-privacy-tag">
                    <ShieldCheck size={14} />
                    <span>Nenhum rastreador carregado previamente</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
