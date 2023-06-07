type SelectOptionRegionProps = {
  name: string;
};

export const SelectOptionRegion = ({ name }: SelectOptionRegionProps) => {
  return (
    <>
      <label>
        Select Region:
        <select name={name}>
          <option value="">--- Select ---</option>
          <option value="PL">PL</option>
          <option value="US">US</option>
          <option value="DE">DE</option>
          <option value="FR">FR</option>
          <option value="CZ">CZ</option>
          <option value="IT">IT</option>
        </select>
      </label>
    </>
  );
};
