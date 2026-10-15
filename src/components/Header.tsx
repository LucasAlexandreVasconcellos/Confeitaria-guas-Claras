import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu as MenuIcon, X, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './Header.css';

interface HeaderProps {
  orderCount: number;
  onOpenOrderModal: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  orderCount,
  onOpenOrderModal,
  searchQuery,
  onSearchChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Categorias', href: '#categorias' },
    { label: 'Cafeteria', href: '#cafeteria' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-inner container">
        {/* Logotipo Tipográfico Refinado Sheila Haick */}
        <a href="#inicio" className="brand-logo" aria-label="Sheila Haick Confeitaria Artesanal - Início">
          <span className="brand-script">Sheila Haick</span>
          <span className="brand-sub">CONFEITARIA ARTESANAL</span>
        </a>

        {/* Navegação Desktop */}
        <nav className="desktop-nav" aria-label="Navegação Principal">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações do Cabeçalho: Busca, Sacola de Encomendas, CTA */}
        <div className="header-actions">
          {/* Campo de Busca Rápida */}
          <div className={`search-container ${searchOpen ? 'open' : ''}`}>
            {searchOpen && (
              <input
                type="text"
                className="search-input"
                placeholder="Buscar delícias..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                autoFocus
                aria-label="Buscar produtos no cardápio"
              />
            )}
            <button
              type="button"
              className="action-icon-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label={searchOpen ? 'Fechar busca' : 'Abrir busca no cardápio'}
              title="Buscar no cardápio"
            >
              <Search size={20} strokeWidth={2} />
            </button>
          </div>

          {/* Sacola de Encomenda com Badge */}
          <button
            type="button"
            className="action-icon-btn bag-btn"
            onClick={onOpenOrderModal}
            aria-label={`Ver lista de encomendas. ${orderCount} itens adicionados.`}
            title="Minha lista de encomendas"
          >
            <ShoppingBag size={20} strokeWidth={2} />
            {orderCount > 0 && <span className="bag-badge">{orderCount}</span>}
          </button>

          {/* CTA Principal de Conversão */}
          <a
            href={`https://wa.me/${businessInfo.contacts.whatsappNumber}?text=${encodeURIComponent(
              'Olá, Sheila Haick! Gostaria de fazer uma encomenda para uma data especial.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-rose header-cta"
            title="Fazer encomenda pelo WhatsApp oficial"
          >
            <span>Fazer Encomenda</span>
          </a>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Menu Gaveta Mobile */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Menu móvel">
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="mobile-nav-link" onClick={handleNavClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-drawer-footer">
              <a
                href={`https://wa.me/${businessInfo.contacts.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-dark mobile-cta-btn"
                onClick={handleNavClick}
              >
                <Phone size={18} />
                <span>Pedir no WhatsApp: {businessInfo.contacts.whatsappFormatted}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
