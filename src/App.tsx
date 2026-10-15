import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Differentiators } from './components/Differentiators';
import { CategoryCards } from './components/CategoryCards';
import { HighlightSection } from './components/HighlightSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { OrderCTA } from './components/OrderCTA';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { OrderDrawerModal } from './components/OrderDrawerModal';
import { PrivacyModal } from './components/PrivacyModal';
import { products } from './data/products';
import type { Product, OrderItem, ProductCategory } from './types';

export const App: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Adicionar item à lista de encomendas
  const handleAddToCart = (product: Product) => {
    setOrderItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  // Alterar quantidade (+1 ou -1)
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setOrderItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is OrderItem => item !== null);
    });
  };

  // Remover item específico
  const handleRemoveItem = (productId: string) => {
    setOrderItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Limpar lista completa
  const handleClearOrder = () => {
    setOrderItems([]);
  };

  // Verifica se o item já foi adicionado
  const isItemInCart = (productId: string) => {
    return orderItems.some((item) => item.product.id === productId);
  };

  // Seleção vinda dos cards de categorias com rolagem suave para o cardápio
  const handleSelectCategory = (category: ProductCategory) => {
    setActiveCategory(category);
    const menuEl = document.getElementById('cardapio');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Rolagem suave para o cardápio a partir do Hero
  const handleExploreMenu = () => {
    const menuEl = document.getElementById('cardapio');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalOrderCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="site-app">
      {/* Acessibilidade WCAG 2.2: Pular para o Conteúdo Principal */}
      <a href="#conteudo-principal" className="skip-to-content">
        Pular para o conteúdo principal
      </a>

      {/* Seção A: Cabeçalho com Navegação e Sacola */}
      <Header
        orderCount={totalOrderCount}
        onOpenOrderModal={() => setOrderModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main id="conteudo-principal">
        {/* Seção B: Hero Principal com Composição Editorial */}
        <Hero onExploreClick={handleExploreMenu} />

        {/* Seção C: Diferenciais da Confeitaria */}
        <Differentiators />

        {/* Seção D: 3 Cartões de Categorias Pastel */}
        <CategoryCards onSelectCategory={handleSelectCategory} />

        {/* Seção E: Destaque Complementar de Cafeteria & Salgados */}
        <HighlightSection onExploreCoffee={handleSelectCategory} />

        {/* Seção F: Cardápio Detalhado & Filtros Interativos */}
        <MenuSection
          products={products}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAddToCart={handleAddToCart}
          isItemInCart={isItemInCart}
        />

        {/* Seção G: História e Valores Sheila Haick */}
        <AboutSection />

        {/* Seção H: Banner de Encomendas & Comemorações */}
        <OrderCTA />

        {/* Seção I: Localização, Horários e Mapa com Consentimento */}
        <LocationSection />
      </main>

      {/* Seção J: Rodapé Integrado com Textura e Redes */}
      <Footer onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />

      {/* Modal / Gaveta de Encomendas para WhatsApp */}
      <OrderDrawerModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />

      {/* Modal de Política de Privacidade e LGPD */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
};

export default App;
