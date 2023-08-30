import { Text } from "../text/Text";

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <Text tag="h2" variant="heading-4">
        {title}
      </Text>
    </div>
  );
};
