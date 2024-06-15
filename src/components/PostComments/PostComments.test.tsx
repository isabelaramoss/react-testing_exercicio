import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        //Renderiza o component PostComment
        render(<PostComment/>);
        //Verifica se o botão 'Comentar' é mostrado após a renderização
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    //Teste - verifica a possibilidade de adicionar dois comentários
    it('Deve adicionar dois comentários', () => {
        //Renderiza o componente
        render(<PostComment/>);

        //Adiciona o primeiro comentário.
            //Muda o valor da textarea
        fireEvent.click(screen.getByTestId('comment-textarea'),{
            target: {
                value: 'Primeiro comentário adicionado via testes',
            }
        });
        //Adiciona comentario clicando no botão
        fireEvent.click(screen.getByTestId('comment-button'));

        //Adiciona o segundo comentário.
            //Muda novamente o valor da textarea
        fireEvent.click(screen.getByTestId('comment-textarea'),{
            target: {
                value: 'Segundo comentário adicionado via testes',
            }
        });
        //Adiciona comentario clicando no botão
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
    


});