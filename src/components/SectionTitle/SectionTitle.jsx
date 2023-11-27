
const SectionTitle = ({heading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            {/* <p className="text-orange-600 mb-2">--- {subHeading} ---</p> */}
            <h1 className="text-3xl uppercase border-y-4 py-4 ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;