import { FC, ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;      // Função chamada ao clicar no botão
  children: ReactNode;      // Conteúdo dentro do botão (texto, ícones, etc.)
  className?: string;       // Classe CSS opcional para customização
}

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {

    

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;