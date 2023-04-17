function ReviewCard() {
  return (
    <>
      <section className="review-card">
        <div className="bg-gray-50 p-10">
          <p className="mb-4">
            In laborum est aute sint enim occaecat culpa ut nostrud Lorem
            labore. Ut Lorem ipsum nostrud officia non duis et officia est
            tempor magna officia. Sint consectetur irure ipsum id esse culpa
            fugiat non excepteur consectetur eu. Lorem velit cillum cillum
            aliquip nostrud et nulla cupidatat mollit sint proident ullamco
            fugiat. Dolore do eu proident eiusmod Lorem est. Voluptate consequat
            adipisicing labore nostrud et quis do ipsum. Lorem consequat aliqua
            velit reprehenderit labore sunt nostrud nisi deserunt nulla non enim
            cupidatat.
          </p>
          <div className=" flex align-middle gap-2">
            <div>
              <div className=" w-12 h-12 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="font-semibold">Title</h5>
              <p className=" text-sm text-yellow-600">Description</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReviewCard;
