import CardsBrandWeek from "./CardsBrandWeek"
function BrandOfWeek() {
  return (
    <div className="container-fluid  brand-week-clr my-3 p-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 className="fs-cs-5 py-2">Brands of the Week - Up to 20% off</h4>
        <h4 className="fs-cs-2">Offer ends May 31, 2023 at 10 AM PT.</h4>
        <CardsBrandWeek/>
        <div><button className="rounded-pill mt-2 px-2 py-2 bg-transparent">View all Brands of the Week </button>
</div>
</div>

    </div>
  )
}

export default BrandOfWeek