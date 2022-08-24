import "./BlogCard.css";

const BlogCard = ({ data }) => {
  const heading = data.heading;
  const body = data.body;
  const imageUrl = data.image.imageUrl;
  const bodySliced = body.slice(0, 100);
  return (
    <>
      <div className="blog-card">
        <img src={imageUrl} width="100%" alt="blog" />
        <h1 style={{ textAlign: "center" }}>{data.heading}</h1>
        <p className="blog-body">{bodySliced}...</p>
        <br />
        <div className="blog-card__read-more">Read More</div>
      </div>
    </>
  );
};

export default BlogCard;
