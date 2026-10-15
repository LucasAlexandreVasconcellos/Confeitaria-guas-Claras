import React from 'react';

interface BrushDividerProps {
  position: 'top' | 'bottom';
  fillColor?: string; // Cor do fundo da seção adjacente (ex: #faf4ef creme)
  className?: string;
  variant?: 'subtle' | 'wavy' | 'deckled';
}

/**
 * BrushDivider - Reproduz a linguagem visual artesanal de bordas irregulares / pinceladas
 * observada fielmente na referência visual, separando a área rosa queimado do fundo creme.
 */
export const BrushDivider: React.FC<BrushDividerProps> = ({
  position,
  fillColor = '#faf4ef',
  className = '',
  variant = 'deckled',
}) => {
  // SVG paths com variações orgânicas de pincelada e papel artesanal rasgado
  const pathTop =
    'M0,0 L0,32 C50,22 95,38 140,24 C190,16 235,32 280,26 C330,18 375,34 420,22 C470,14 515,30 560,25 C610,17 655,33 700,21 C750,15 795,29 840,23 C890,16 935,31 980,25 C1030,19 1075,33 1120,22 C1165,15 1200,28 1200,28 L1200,0 Z';

  const pathBottom =
    'M0,32 L0,0 C45,12 85,3 130,14 C175,22 220,7 265,15 C310,23 355,9 400,16 C445,24 490,11 535,18 C580,26 625,12 670,17 C715,25 760,10 805,19 C850,27 895,13 940,20 C985,28 1030,14 1075,21 C1120,27 1160,15 1200,22 L1200,32 Z';

  const isTop = position === 'top';

  return (
    <div
      className={`brush-divider-container ${isTop ? 'brush-top' : 'brush-bottom'} ${className}`}
      aria-hidden="true"
      style={{
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: '24px',
          fill: fillColor,
        }}
      >
        <path d={isTop ? pathTop : pathBottom} />
      </svg>
    </div>
  );
};
