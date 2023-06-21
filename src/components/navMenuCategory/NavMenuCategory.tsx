import { Text } from "../text/text";

type NavMenuCategoryProps = {
  label: string;
};

export const NavMenuCategory = ({ label }: NavMenuCategoryProps) => {
  return (
    <Text tag="p" variant="action-1">
      {label}
    </Text>
  );
};
