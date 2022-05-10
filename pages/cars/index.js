export default function CarsList({ cars }) {
  return cars.map((car) => {
    return (
      <>
        <p>Car: {car.id}</p>
        <p>Color: {car.color}</p>
        <img src={car.image} width={150} />
      </>
    )
  })
}

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:3000/cars.json`);
  const data = await req.json();

  return {
    props: {
      cars: data,
    },
  };
}
