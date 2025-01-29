export default function Success({ apiResponse }) {
  console.log(apiResponse);
  return (
    <div className="">
      {apiResponse.map((response, index) => (
        <div key={index}>{response.adet}</div>
      ))}
    </div>
  );
}
