// Setting Component Types Dynamically + Setting Default Prop Values (ContainerType = "menu")
export default function Tabs({ buttons, children, ContainerType = "menu" }) {
  return (
    <>
      <ContainerType>{buttons}</ContainerType>
      {children}
    </>
  );
}
