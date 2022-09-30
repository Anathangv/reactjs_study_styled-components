import { Paragraph } from "../Paragraph/Paragraph";
import { ContantContainer } from "./Content.styles";

export function Content(){
  return  (
    <ContantContainer>
      <Paragraph variant={"green"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales felis at eleifend mollis. Morbi scelerisque augue a leo tincidunt egestas. Praesent ac ligula interdum, blandit nisl vitae, dignissim nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce id erat velit. Nullam varius pharetra urna tincidunt porta. In pulvinar tellus sed odio egestas, vitae ullamcorper neque aliquam. Praesent quis purus ac lacus tristique sodales sed sed lacus. Pellentesque lectus ex, bibendum sed odio sit amet, hendrerit convallis leo. Vestibulum libero massa, dictum volutpat felis a, dapibus condimentum quam. Donec ipsum risus, hendrerit non blandit a, lacinia non massa. Integer ac urna in neque ornare facilisis eu eget diam.
        Cras nec fermentum ipsum, quis feugiat dui.
      </Paragraph>
      <Paragraph variant={"blue"}>
        Integer in ligula quam. Sed molestie tincidunt mi ac commodo. Nulla ut eleifend lectus. In sit amet justo sem. Sed pulvinar tortor mi, nec volutpat enim ullamcorper non. Vestibulum egestas, urna ac luctus aliquet, sem turpis iaculis erat, id feugiat elit dolor non lorem. Pellentesque tempus laoreet ipsum vel facilisis. Nullam ut justo sem. Nulla facilisi. Vivamus mi libero, iaculis eu gravida quis, luctus quis elit. Nam vehicula, arcu et interdum pellentesque, ex ante accumsan nibh, hendrerit condimentum nunc lacus commodo mauris. Proin sed nibh arcu. Nulla sit amet posuere lacus. Vestibulum eget pulvinar mauris.
      </Paragraph>
      <Paragraph variant={"ice"}>
        Vivamus sit amet tincidunt dui. Aenean id dui porta, cursus elit et, semper nibh. In eget quam ante. Etiam dictum turpis quis interdum varius. Donec vulputate aliquam fringilla. Pellentesque facilisis nisi non congue dignissim. Sed accumsan metus nec molestie gravida. Sed sit amet urna ut tortor lobortis tempor.
      </Paragraph>
    </ContantContainer>
  );
}