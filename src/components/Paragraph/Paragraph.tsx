import { ParagraghContainer, ParagraphVariant } from "./Paragraph.styles"

interface IParagraph{
  children: React.ReactNode,
  variant: ParagraphVariant
}

export function Paragraph({children, variant}:IParagraph){
  return(
    <ParagraghContainer variant={variant}>
      {children}
    </ParagraghContainer>
  )
}