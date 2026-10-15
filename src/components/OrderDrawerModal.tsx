import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, ExternalLink, ShoppingBag, ShieldCheck } from 'lucide-react';
import { OrderItem } from '../types';
import { businessInfo } from '../data/businessInfo';
import './OrderDrawerModal.css';

interface OrderDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearOrder: () => void;
}

export const OrderDrawerModal: React.FC<OrderDrawerModalProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
}) => {
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isOpen) return null;

  // Sanitização e formatação da mensagem do WhatsApp (OWASP SEC-01 e SEC-04)
  const generateWhatsAppMessage = () => {
    let message = 'Olá, Sheila Haick! Gostaria de consultar e solicitar a seguinte encomenda:\n\n';

    orderItems.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}* (Qtd: ${item.quantity})\n`;
    });

    if (customerNotes.trim()) {
      message += `\n*Observações / Data pretendida:* ${customerNotes.trim()}\n`;
    }

    message += '\nPoderiam confirmar a disponibilidade e o valor total, por favor? Obrigado!';
    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${businessInfo.contacts.whatsappNumber}?text=${generateWhatsAppMessage()}`;

  const totalItemsCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div
      className="order-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      onClick={onClose}
    >
      <div className="order-modal-panel" onClick={(e) => e.stopPropagation()}>
        {/* Cabeçalho do Painel */}
        <div className="order-modal-header">
          <div className="modal-title-wrap">
            <ShoppingBag size={22} className="modal-bag-icon" />
            <h2 id="order-modal-title">Sua Lista de Encomenda</h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fechar lista de encomenda"
          >
            <X size={20} />
          </button>
        </div>

        {/* Corpo da Lista */}
        <div className="order-modal-body">
          {orderItems.length === 0 ? (
            <div className="order-empty-state">
              <div className="empty-icon-wrap">
                <ShoppingBag size={48} strokeWidth={1.5} />
              </div>
              <h3>Sua lista está vazia</h3>
              <p>
                Explore o cardápio e adicione suas tortas, bolos e sobremesas favoritas para montar seu pedido.
              </p>
              <button
                type="button"
                className="btn-primary-rose"
                onClick={onClose}
              >
                Voltar ao Cardápio
              </button>
            </div>
          ) : (
            <>
              <div className="order-items-list">
                {orderItems.map((item) => (
                  <div key={item.product.id} className="order-item-row">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="order-item-thumb"
                      width={64}
                      height={64}
                    />

                    <div className="order-item-info">
                      <h4>{item.product.name}</h4>
                      <span className="order-item-cat">{item.product.categoryName}</span>
                    </div>

                    <div className="quantity-controls">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        aria-label={`Diminuir quantidade de ${item.product.name}`}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        aria-label={`Aumentar quantidade de ${item.product.name}`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-item-btn"
                      onClick={() => onRemoveItem(item.product.id)}
                      aria-label={`Remover ${item.product.name} da lista`}
                      title="Remover item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Campo para Observações da Encomenda */}
              <div className="order-notes-wrap">
                <label htmlFor="customer-notes" className="notes-label">
                  Observações / Data pretendida (opcional):
                </label>
                <textarea
                  id="customer-notes"
                  className="notes-textarea"
                  rows={2}
                  maxLength={250}
                  placeholder="Ex: Para retirar no sábado às 15h, sabor morango..."
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                />
              </div>

              {/* Informação de Transparência Comercial */}
              <div className="commercial-notice">
                <ShieldCheck size={16} className="notice-icon" />
                <p>
                  <strong>Sem cobrança no site:</strong> Seus itens serão enviados em mensagem formatada
                  para o WhatsApp oficial para conferência de data e disponibilidade da confeitaria.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Rodapé e Botões de Ação */}
        {orderItems.length > 0 && (
          <div className="order-modal-footer">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-dark modal-action-btn"
              title="Enviar lista pronta para o WhatsApp oficial"
            >
              <MessageCircle size={20} />
              <span>Finalizar no WhatsApp ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'itens'})</span>
            </a>

            <div className="modal-secondary-actions">
              <a
                href={businessInfo.contacts.ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline modal-secondary-btn"
              >
                <span>Ou pedir no iFood</span>
                <ExternalLink size={14} />
              </a>

              <button
                type="button"
                className="clear-order-btn"
                onClick={onClearOrder}
              >
                Limpar lista
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
