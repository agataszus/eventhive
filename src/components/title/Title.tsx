import { Text } from "../text/text";

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <Text tag="h2" variant="heading-3">
        {title}
      </Text>
    </div>
  );
};
