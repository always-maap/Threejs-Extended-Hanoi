const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/*<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />*/}
      <pointLight position={[-10, 15, -10]} />
    </>
  );
};

export default Lights;
