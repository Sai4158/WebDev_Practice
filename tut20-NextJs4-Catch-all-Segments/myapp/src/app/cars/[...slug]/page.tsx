const page = ({ params }) => {
  if (params.slug.length === 2) {
    return (
      <div>
        <h1> {params.slug[1]}</h1> <br /> <h1>Thank you for buying a bmw</h1>
      </div>
    );
  } else if (params.slug.length === 1) {
    return (
      <div>
        {params.slug[0]}
        <h1>here are all the model we have</h1>
        <br />

        <a href="cars/m3">m3</a>
        <br />
        <a href="cars/m4">m4</a>
        <br />
        <a href="cars/m5">m5</a>
      </div>
    );
  }

  return <div>hi</div>;
};

export default page;
