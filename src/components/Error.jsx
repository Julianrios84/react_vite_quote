const Error = ({ message }) => {
  return (
    <div className="text-red-600 text-center p-3 capitalize font-bold">
      <p>{message}</p>
    </div>
  );
};

export default Error;
