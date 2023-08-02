const HomePage = () => {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <>
      {names.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </>
  );
};
