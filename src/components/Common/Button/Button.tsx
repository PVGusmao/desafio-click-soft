import { ButtonPost, ButtonText } from "./style";

type Props = {
  title: string;
  onPress: () => void;
}

/**
 * Renders a button component with a given title and onPress event handler.
 *
 * @param {string} title - The title of the button.
 * @param {function} onPress - The event handler for the button press.
 * @return {React.ReactElement} The rendered button component.
 */
export function Button({ title, onPress }: Props): React.ReactElement {
  return (
    <ButtonPost onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonPost>
  )
}