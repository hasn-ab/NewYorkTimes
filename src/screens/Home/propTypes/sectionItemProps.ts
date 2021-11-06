//Type for Section item component props
export type SectionItemProps = {
  name: String;
  active: Boolean;
  onPress: () => void;
};

export type SectionDataType = {
  key?: String;
  name?: String;
};
