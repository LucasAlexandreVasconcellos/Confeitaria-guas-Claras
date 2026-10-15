import React from 'react';
import { BrushDivider } from './BrushDivider';
import { Instagram, Phone, MapPin, ExternalLink, Heart, Shield } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './Footer.css';

interface FooterProps {
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal }) => {
  return (
    <footer className="site-footer" aria-label="Rodapé do Website">
      {/* Transição com pincelada artesanal conectando o conteúdo em creme ao rodapé rosa queimado */}
      <BrushDivider position="top" fillColor="#faf4ef" />

      <div className="footer-content container">
        <div className="footer-grid">
          {/* Coluna 1: Identidade e Redes */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="footer-script">Sheila Haick</span>
              <span className="footer-sub">CONFEITARIA ARTESANAL</span>
            </div>
            
            <p className="footer-tagline">
              Momentos doces e inesquecíveis preparados à mão com os melhores ingredientes e muito afeto em Águas Claras.
            </p>

            <div className="footer-socials">
              <a
                href={businessInfo.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Perfil da Sheila Haick no Instagram (@sheilahaick)"
                title="Siga no Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href={`https://wa.me/${businessInfo.contacts.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Contato direto no WhatsApp oficial"
                title="Fale no WhatsApp"
              >
                <Phone size={20} />
              </a>

              <a
                href={businessInfo.contacts.ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Página da confeitaria no iFood"
                title="Peça no iFood"
              >
                <ExternalLink size={20} />
              </a>

              <a
                href={businessInfo.contacts.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Localização no Google Maps"
                title="Ver no Google Maps"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="footer-col">
            <h4 className="footer-heading">Navegação</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#categorias">Categorias</a></li>
              <li><a href="#cafeteria">Cafeteria & Bistrô</a></li>
              <li><a href="#cardapio">Cardápio Completo</a></li>
              <li><a href="#sobre">Nossa História</a></li>
              <li><a href="#localizacao">Onde Estamos</a></li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento e Encomendas */}
          <div className="footer-col">
            <h4 className="footer-heading">Atendimento</h4>
            <ul className="footer-links">
              <li>
                <a
                  href={`https://wa.me/${businessInfo.contacts.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fazer Encomenda
                </a>
              </li>
              <li>
                <a
                  href={businessInfo.contacts.ifoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pronta-Entrega no iFood
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-text-btn"
                  onClick={onOpenPrivacyModal}
                >
                  Privacidade & LGPD
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Onde Estamos */}
          <div className="footer-col">
            <h4 className="footer-heading">Visite-nos</h4>
            <address className="footer-address">
              <p>{businessInfo.address.mall}, {businessInfo.address.unit}</p>
              <p>{businessInfo.address.street}</p>
              <p>{businessInfo.address.neighborhood}, {businessInfo.address.city} - {businessInfo.address.state}</p>
              <p className="footer-hours-label">Horários:</p>
              <p>{businessInfo.hours.weekdays}</p>
              <p>{businessInfo.hours.weekends}</p>
            </address>
          </div>
        </div>

        {/* Barra de Direitos e Privacidade */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Sheila Haick Confeitaria Artesanal. Todos os direitos reservados.
          </p>

          <div className="footer-privacy-badge">
            <Shield size={14} />
            <button
              type="button"
              className="footer-privacy-btn"
              onClick={onOpenPrivacyModal}
              title="Ler política de privacidade e conformidade LGPD"
            >
              Política de Privacidade & LGPD (Privacy-First)
            </button>
          </div>

          <p className="footer-dev">
            Feito com <Heart size={13} className="heart-icon" /> para Águas Claras, DF.
          </p>
        </div>
      </div>
    </footer>
  );
};
