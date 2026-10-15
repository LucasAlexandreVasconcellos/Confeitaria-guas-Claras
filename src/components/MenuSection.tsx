import React from 'react';
import { Product, ProductCategory } from '../types';
import { Plus, Check, ExternalLink, Sparkles, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import './MenuSection.css';

interface MenuSectionProps {
  products: Product[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddToCart: (product: Product) => void;
  isItemInCart: (productId: string) => boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  products,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  onAddToCart,
  isItemInCart,
}) => {
  const categories = [
    { id: 'todas', label: 'Todos os Sabores' },
    { id: 'tortas-doces', label: 'Tortas & Doces' },
    { id: 'bolos-festas', label: 'Bolos & Encomendas' },
    { id: 'sobremesas-assinatura', label: 'Assinatura & Copos' },
    { id: 'cafeteria-salgados', label: 'Cafeteria & Salgados' },
  ];

  const filteredProducts = products.filter((prod) => {
    const matchesCategory = activeCategory === 'todas' || prod.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prod.highlights && prod.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="cardapio" className="menu-section" aria-label="Cardápio de Delícias">
      <div className="container">
        <div className="menu-header">
          <span className="section-eyebrow">Cardápio & Encomendas</span>
          <h2 className="section-title">Escolha Suas Delícias Favoritas</h2>
          <p className="menu-subtitle">
            Selecione os itens para montar sua lista de encomendas via WhatsApp ou peça pelo iFood para pronta-entrega.
          </p>
        </div>

        {/* Abas de Categorias */}
        <div className="category-tabs" role="tablist" aria-label="Filtrar por categoria">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grade de Produtos */}
        {filteredProducts.length === 0 ? (
          <div className="menu-empty">
            <p>Nenhuma delícia encontrada para "{searchQuery}".</p>
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                onSearchChange('');
                onCategoryChange('todas');
              }}
            >
              Limpar busca e ver tudo
            </button>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => {
              const inCart = isItemInCart(product.id);

              return (
                <article key={product.id} className="product-card">
                  {/* Topo do Card com Imagem e Badge */}
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                      loading="lazy"
                      width={380}
                      height={280}
                    />
                    {product.isSpecialty && (
                      <span className="specialty-badge">
                        <Sparkles size={12} />
                        <span>Destaque</span>
                      </span>
                    )}
                    {product.isProvisional && (
                      <span className="provisional-tag" title="Imagem representativa provisória aguardando fotos finais do estabelecimento">
                        Ilustração Provisória
                      </span>
                    )}
                  </div>

                  {/* Informações do Produto */}
                  <div className="product-content">
                    <div className="product-meta">
                      <span className="product-category-name">{product.categoryName}</span>
                      {product.servings && <span className="product-servings">{product.servings}</span>}
                    </div>

                    <h3 className="product-title">{product.name}</h3>

                    <p className="product-desc">{product.description}</p>

                    {/* Destaques / Ingredientes */}
                    {product.highlights && (
                      <div className="product-highlights">
                        {product.highlights.map((tag) => (
                          <span key={tag} className="highlight-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Ações do Card */}
                    <div className="product-footer">
                      <button
                        type="button"
                        className={`add-order-btn ${inCart ? 'in-order' : ''}`}
                        onClick={() => onAddToCart(product)}
                        aria-label={
                          inCart
                            ? `${product.name} adicionado à encomenda. Clique para adicionar mais um.`
                            : `Adicionar ${product.name} à lista de encomenda`
                        }
                      >
                        {inCart ? (
                          <>
                            <Check size={16} />
                            <span>Adicionado (+1)</span>
                          </>
                        ) : (
                          <>
                            <Plus size={16} />
                            <span>Adicionar à Encomenda</span>
                          </>
                        )}
                      </button>

                      {/* Consulta Rápida Individual no WhatsApp */}
                      <a
                        href={`https://wa.me/${businessInfo.contacts.whatsappNumber}?text=${encodeURIComponent(
                          `Olá, Sheila Haick! Gostaria de consultar a disponibilidade do item: ${product.name}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="quick-whatsapp-btn"
                        title="Consultar este item no WhatsApp"
                        aria-label={`Consultar ${product.name} diretamente no WhatsApp`}
                      >
                        <MessageCircle size={18} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Rodapé do Cardápio: Link para iFood */}
        <div className="menu-delivery-banner">
          <div className="delivery-banner-text">
            <h4>Prefere pedir para pronta-entrega agora?</h4>
            <p>Atendemos entregas rápidas em Águas Claras e região através do nosso canal oficial no iFood.</p>
          </div>
          <a
            href={businessInfo.contacts.ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-rose ifood-banner-btn"
            title="Abrir página oficial da Sheila Haick no iFood"
          >
            <span>Pedir no iFood</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
