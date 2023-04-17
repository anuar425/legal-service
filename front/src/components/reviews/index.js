import ReviewCard from "../review-card";

function Reviews() {
  return (
    <>
      <section className="reviews">
        <div className="container mx-auto py-24 max-xl:px-10">
          <h3 className="text-4xl font-bold mb-16 text-center">Отзывы</h3>
          <div className="grid grid-cols-4 gap-4  max-xl:gap-8 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {new Array(4).fill(1).map((item) => (
              <>
                <ReviewCard />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
