import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, CheckCircle } from 'lucide-react';
import './PrivacyModal.css';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="privacy-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      onClick={onClose}
    >
      <div className="privacy-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-modal-header">
          <div className="privacy-title-wrap">
            <ShieldCheck size={26} className="privacy-shield-icon" />
            <h2 id="privacy-modal-title">Política de Privacidade & LGPD</h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fechar aviso de privacidade"
          >
            <X size={20} />
          </button>
        </div>

        <div className="privacy-modal-body">
          <div className="privacy-highlight-box">
            <Lock size={20} className="lock-icon" />
            <p>
              <strong>Arquitetura Privacy-First & Zero-Trackers:</strong> Este website não utiliza cookies
              de rastreamento de publicidade, não vende seus dados e não faz perfilamento de navegação.
            </p>
          </div>

          <section className="privacy-section-item">
            <h3>1. Coleta e Tratamento de Dados (Minimização LGPD)</h3>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), aplicamos o princípio
              da minimização rigorosa. Ao navegar no site da Sheila Haick Confeitaria Artesanal, nenhum dado pessoal
              identificável (nome, CPF, endereço IP para fins comerciais) é capturado ou armazenado em banco de dados nosso.
            </p>
          </section>

          <section className="privacy-section-item">
            <h3>2. Ausência de Cookies Invasivos</h3>
            <p>
              Nosso site opera com recursos estáticos. Não utilizamos ferramentas de telemetria invasiva
              ou redes de pixels de anúncios. O seletor de pedidos opera exclusivamente na memória temporária do seu navegador (sessão local).
            </p>
          </section>

          <section className="privacy-section-item">
            <h3>3. Canais de Atendimento e Encomendas (WhatsApp e iFood)</h3>
            <p>
              Ao optar por entrar em contato ou finalizar uma encomenda, você é direcionado diretamente para os canais
              oficiais:
            </p>
            <ul className="privacy-list">
              <li>
                <CheckCircle size={16} />
                <span><strong>WhatsApp:</strong> A conversa e a troca de dados ocorrem dentro do aplicativo WhatsApp, com criptografia de ponta a ponta.</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span><strong>iFood:</strong> Os pedidos de pronta-entrega são intermediados pelas políticas de segurança e pagamento da plataforma iFood.</span>
              </li>
            </ul>
          </section>

          <section className="privacy-section-item">
            <h3>4. Mapa Interativo com Carregamento sob Demanda</h3>
            <p>
              O mapa interativo da nossa loja em Águas Claras é exibido apenas após seu clique explícito ("Carregar Mapa Interativo"),
              evitando que o Google Maps estabeleça conexões ou cookies de terceiros sem seu consentimento prévio.
            </p>
          </section>

          <section className="privacy-section-item">
            <h3>5. Encarregado e Contato</h3>
            <p>
              Para esclarecer qualquer dúvida sobre privacidade ou atendimento, fale diretamente conosco pelo
              WhatsApp oficial <strong>(61) 99811-3905</strong> ou visite nosso espaço em Águas Claras - DF.
            </p>
          </section>
        </div>

        <div className="privacy-modal-footer">
          <button
            type="button"
            className="btn-primary-dark"
            onClick={onClose}
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
