

const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-info" style={{width: "5rem", height: "5rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <br/>
    </>
  )
}

export default Spinner