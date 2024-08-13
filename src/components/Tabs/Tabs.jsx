// Setting Component Types Dynamically
export default function Tabs({ buttons, children, ContainerType }) {
  return (
    <>
      <ContainerType>{buttons}</ContainerType>
      {children}
    </>
  );
}
