const docs = ({
  params,
}: {
  params: {
    slug: string;
    docs: string;
  };
}) => {
  // if else statements
  if (params.slug.length) {
    return (
      <h1>
        {/* [0] or [1] is url /after docs */}
        views for docs {params.slug[0]} and {params.slug[1]} and{" "}
        {params.slug[2]} AND {params.slug[3]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>views for docs {params.slug[0]}</h1>;
  }

  return (
    <div>
      <h1>docs home page </h1>
    </div>
  );
};

export default docs;
