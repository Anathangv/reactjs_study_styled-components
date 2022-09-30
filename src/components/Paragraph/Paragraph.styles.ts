import styled from 'styled-components'

export type ParagraphVariant = 'green' | 'blue' | 'ice';

interface IParagraphProps{
  variant: ParagraphVariant;
}

export const ParagraghContainer = styled.p<IParagraphProps>`
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${(props => props.theme[props.variant])};

  margin-bottom: 1rem;
`